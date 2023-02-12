module.exports = {
  name: 'ready',
  once: true,

  async execute(client) {
    console.log(`[Startup] ${client.user.username} is online`)
  }
}