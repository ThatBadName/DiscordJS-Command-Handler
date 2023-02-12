module.exports = {
  data: {
    name: 'example-selectMenu' // This is the custom ID of the select menu
  },

  async execute(interaction, client) {
    interaction.reply({content: `You chose ${interaction.values[0]}`})
  }
}