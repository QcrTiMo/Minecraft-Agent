const config = require('./config.json')
const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: config.host,
    port: config.port,
    username: config.username,
    version: config.version,
    auth: config.auth,
})

bot.once('spawn', () => {
    bot.chat('Hello, I am a chat bot!')
})

bot.on('chat', (username, message) => {
    if(username === bot.username){
        return;
    }
    bot.chat(message);
})

bot.on('kicked', console.log)
bot.on('error', console.log)