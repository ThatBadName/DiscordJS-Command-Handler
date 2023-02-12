const fs = require('fs')
const {
  SlashCommandBuilder,
  EmbedBuilder
} = require('discord.js')

module.exports = {
  testOnly: true,
  hide: false,
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Get a list of all bot commands')
    .setDMPermission(false),

  async execute(interaction, client) {
    const helpEmbed = new EmbedBuilder()
      .setTitle(`${client.user.username} Help Menu`)

    for (const folder of fs.readdirSync(`./src/commands`, 'ascii')) {
      helpEmbed.addFields({
        name: `${folder}`,
        value: `${
          fs.readdirSync(`./src/commands/${folder}`, 'ascii')
            .map((file) => {
              const cmd = require(`../../../src/commands/${folder}/${file}`)
              return cmd.hide === false ? `\`${cmd.data.name}\`` : ''
            })
            .join(`, `)
            .length === 0 ? 'No Commands' : fs.readdirSync(`./src/commands/${folder}`, 'ascii')
              .map((file) => {
                const cmd = require(`../../../src/commands/${folder}/${file}`)
                return cmd.hide === false ? `\`${cmd.data.name}\`` : ''
              })
              .join(`, `)
            }`,
        inline: true
      })
    }

    interaction.reply({
      embeds: [
        helpEmbed
      ]
    })
  }
}