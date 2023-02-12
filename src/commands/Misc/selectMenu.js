const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js')

module.exports = {
  testOnly: true,
  hide: false,
  data: new SlashCommandBuilder()
  .setName('select-menu')
  .setDescription('Responds with a select menu'),

  async execute(interaction, client) {
    interaction.reply({
      content: `This is a select menu!`,
      components: [
        new ActionRowBuilder()
        .addComponents(
          new StringSelectMenuBuilder()
          .setCustomId('example-selectMenu')
          .addOptions(
            {
              label: 'Option 1',
              value: 'Option 1',
              description: 'This is an option',
              emoji: '1️⃣'
            },
            {
              label: 'Option 2',
              value: 'Option 2',
              description: 'This is an option',
              emoji: '2️⃣'
            },
            {
              label: 'Option 3',
              value: 'Option 3',
              description: 'This is an option',
              emoji: '3️⃣'
            }
          )
        )
      ]
    })
  }
}