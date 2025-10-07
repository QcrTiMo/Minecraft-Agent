const mineflayer = require('mineflayer');
const config = require('../config.json');

console.log('Loaded config:', config);

const bot = mineflayer.createBot({
    host: config.host,
    port: config.port,
    username: config.username,
    auth: config.auth,
    version: config.version
});

bot.on('login', () => {
    console.log(`Bot ${bot.username} has logged in`);
});

bot.on('spawn', () => {
    console.log('Bot has spawned.Ready for action!');
    bot.chat('你好!我是AI机器人!');
});

bot.on('chat', (username, message) => {
    if (username === bot.username){
        return;
    }

    if (message === '你好'){
        bot.chat(`你好, ${username}! 很高兴认识你`);
    }

    if (message === '报告位置'){
        const position = bot.entity.position;
        bot.chat(`我的当前位置是: x=${position.x.toFixed(2)}, y=${position.y.toFixed(2)}, z=${position.z.toFixed(2)}`);
    }
});

bot.on('kicked', (reason, loggedIn) => {
    console.log(`Bot was kicked from the server. Reason: ${reason}`);
});

bot.on('error', err => {
    console.log(`An error occurred: ${err}`);
});

bot.on('end', (reason) => {
    console.log(`Bot has been disconnected from the server. Reason: ${reason}`);
})