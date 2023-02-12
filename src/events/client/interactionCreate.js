const {
  InteractionType
} = require('discord.js')

module.exports = {
  name: 'interactionCreate',
  once: false,

  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const {
        commands
      } = client
      const {
        commandName
      } = interaction
      const command = commands.get(commandName)
      if (!command) return

      try {
        await command.execute(interaction, client)
      } catch (error) {
        console.error(error)
      }
    } else if (interaction.isButton()) {
      const {
        buttons
      } = client
      const {
        customId
      } = interaction
      const button = buttons.get(customId)
      if (!button) return new Error('This button has not got any code')
      try {
        await button.execute(interaction, client)
      } catch (err) {
        console.error(err)
      }
    } else if (interaction.isContextMenuCommand()) {
      const {
        commands
      } = client
      const {
        commandName
      } = interaction
      const contextCommand = commands.get(commandName)
      if (!contextCommand) return

      try {
        await contextCommand.execute(interaction, client)
      } catch (error) {
        console.error(error)
      }
    } else if (interaction.isStringSelectMenu()) {
      const {
        selectMenus
      } = client
      const {
        customId
      } = interaction
      const menu = selectMenus.get(customId)
      if (!menu) return new Error('This menu has not got any code')

      try {
        await menu.execute(interaction, client)
      } catch (err) {
        console.error(err)
      }
    } else if (interaction.type == InteractionType.ApplicationCommandAutocomplete) {
      const {
        commands
      } = client
      const {
        commandName
      } = interaction
      const command = commands.get(commandName)
      if (!command) return

      try {
        await command.autocomplete(interaction, client)
      } catch (error) {
        console.error(error)
      }
    } else if (interaction.type == InteractionType.ModalSubmit) {
    }
  }
}