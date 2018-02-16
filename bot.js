const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'Nodeem') {
    message.reply('Nodeem ist mein besta!');
  }
});

});

client.on('message', message => {
  if (message.content === 'SEIJI') {
    message.reply('SEIJI ist der Beste!');
  }
});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
