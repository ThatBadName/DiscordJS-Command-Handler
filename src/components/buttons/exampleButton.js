module.exports = {
  data: {
    name: 'example-button'
  },

  async execute(interaction, client) {
    interaction.reply({content: `You pressed a button!`})
  }
}