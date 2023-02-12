const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  testOnly: true, // If this is true then the command will only be registered in the test server
  hide: false, // If this is true then this command will not show up on the built in help menu
  data: new SlashCommandBuilder()
  .setName('example') // The name of your command
  .setDescription('An example command'), // What does your command do?
  // Look here: https://discordjs.guide/creating-your-bot/slash-commands.html#individual-command-files to get more info on how to make a slash command

  async execute(interaction, client) {
    // The code for your command can go here
    interaction.reply({content: `Hi! My name is ${client.user.username}`})
  }
}