const {
  EmbedBuilder,
  TextInputBuilder,
  ModalBuilder,
  ActionRowBuilder
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
        await interaction.reply({
          embeds: [
            new EmbedBuilder()
            .setTitle('Hmm. This is strange')
            .setColor('0xa477fc')
            .setDescription('Something went wrong while executing this command. If this continues please report it with the \`/report bug\` command')
          ],
          ephemeral: true
        })
      }
    }
  }
}