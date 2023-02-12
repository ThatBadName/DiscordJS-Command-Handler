# DJS Command Handler
---
This is an advanced slash command handler made for discord.js V14. Make sure to checkout the [DJS Guide](https://discordjs.guide/) and their [docs](https://discord.js.org/)\
This handler comes pre loaded with a component handler, command handler and a few example commands.\
If you need any help [join our support server](https://discord.gg/c4MZpDPvKW)

## Usage
---
1. Clone this repo
2. Enter your bots information in config.json:
```json
{
  "token": "Put your bots token here", 
  "testGuild": "Put your test server here",
  "clientId": "Put your bots user ID here"
}
```
3. In a terminal run `npm i` to install all the required packages
4. Run `node src/index.js` to run the bot

## FAQ
---
**What is a "test server"?**
- This is a server where you should register all your developer only commands. They will be registered instantly.\
- Do not put all your commands as `testOnly: true` they will only be registed in the server that you specified

**What is my bots token?**
- Your bots token is what you use to login to your bot. DO NOT SHARE IT

**How do I setup a bot?**
- [Go here](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)

**Got another question?**
- Join the [support server](https://discord.gg/c4MZpDPvKW)

## Road Map
- [ ] Add a built in blacklist
- [ ] Database suppport (Mongo and a file system)
- [ ] Turn this into a npm package

## Credit
- Some of the handler code comes from [Fusion Terror](https://www.youtube.com/@FusionTerror) however has been modified (to make upgrades) by me