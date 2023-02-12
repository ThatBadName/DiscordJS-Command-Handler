const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js')

module.exports = {
  testOnly: true,
  hide: false,
  data: new SlashCommandBuilder()
  .setName('button')
  .setDescription('Responds with a button'),

  async execute(interaction, client) {
    interaction.reply({
      content: `This is a button!`,
      components: [
        new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
          .setCustomId('example-button')
          .setLabel('Press Me')
          .setStyle('Primary')
        )
      ]
    })
  }
}