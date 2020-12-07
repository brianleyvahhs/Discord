Discord = require('discord.js');
Bot = new Discord.Client();
Prefix = ("Enter Prefix Here"); // Your Personal Bot Prefix //
Token = ("Enter Token Here"); // Your Personal Bot Token //
Status = ("Online");

Bot.once('ready', () => {
  console.info(`Name: ${Bot.user.username}`);
  console.info(`Bot Status: ${Status}!`);
});

Bot.login(Token);
