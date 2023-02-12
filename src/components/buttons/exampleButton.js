module.exports = {
  data: {
    name: 'example-button' // This is the custom ID of the button
  },

  async execute(interaction, client) {
    interaction.reply({content: `You pressed a button!`})
  }
}