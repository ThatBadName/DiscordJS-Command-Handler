const mongoose = require('mongoose')
const {
  mongoUri,
  useMongo
} = require('../../../config.json')
module.exports = {
  name: 'ready',
  once: true,

  async execute(client) {
    console.log(`[Startup] ${client.user.username} is online`)
  }
}