const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


module.exports = client => {
  console.log(`${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  console.log(`                                                                                                                                                                     `)
  client.user.setActivity(`Avenger ❤️ Guard III`, { type: "PLAYING"}); // 
  console.log(`[BOT] | Avenger Guard III`);
};



//❤️