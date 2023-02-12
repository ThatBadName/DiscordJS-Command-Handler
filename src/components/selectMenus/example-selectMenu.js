module.exports = {
  data: {
    name: 'example-selectMenu'
  },

  async execute(interaction, client) {
    interaction.reply({content: `You chose ${interaction.values[0]}`})
  }
}