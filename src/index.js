const {
  token
} = require('./config.json')
const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials
} = require('discord.js')
const fs = require('fs')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildInvites
  ],
  partials: [
    Partials.Channel,
    Partials.ThreadMember
  ]
})

client.commands = new Collection()
client.buttons = new Collection()
client.selectMenus = new Collection()
client.commandArrayGlobal = []
client.commandArrayLocal = []

const functionFolders = fs.readdirSync('./src/functions')
for (const folder of functionFolders) {
  const functionFiles = fs.readdirSync(`./src/functions/${folder}`).filter(file => file.endsWith('.js'))
  for (const file of functionFiles) require(`./functions/${folder}/${file}`)(client)
}

client.handleEvents()
client.handleComponents()
client.handleCommands()
client.login(token)