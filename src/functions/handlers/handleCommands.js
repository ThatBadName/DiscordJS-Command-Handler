const fs = require('fs')
const {
  REST
} = require('@discordjs/rest')
const {
  Routes
} = require('discord-api-types/v10')
const {
  token,
  clientId,
  testGuild
} = require('../../config.json')

module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync('./src/commands')
    for (const folder of commandFolders) {
      const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'))

      const {
        commands,
        commandArrayGlobal,
        commandArrayLocal
      } = client
      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`)
        if (command.testOnly === true) {
          commands.set(command.data.name, command)
          commandArrayLocal.push(command.data.toJSON())
        } else {
          commands.set(command.data.name, command)
          commandArrayGlobal.push(command.data.toJSON())
        }
      }
    }

    const rest = new REST({
      version: "10"
    }).setToken(token)
    try {
      console.log(`[Global Handler] Started refreshing (/) commands`)

      if (client.commandArrayGlobal.length >= 1) await rest.put(
        Routes.applicationCommands(clientId), {
          body: client.commandArrayGlobal
        }
      )
      console.log(`[Global Handler] Successfully reloaded (/) commands`)
      console.log(`[Local Handler] Started refreshing (/) commands`)

      if (client.commandArrayLocal.length >= 1) await rest.put(
        Routes.applicationCommands(clientId, testGuild), {
          body: client.commandArrayLocal
        }
      )

      console.log(`[Local Handler] Successfully reloaded (/) commands`)
    } catch (error) {
      console.error(error)
    }
  }
}