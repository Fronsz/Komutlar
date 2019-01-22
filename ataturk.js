const Discord = require('discord.js');
var request = require('request');


exports.run = (client, message, params) => {
    request('https://api.eggsybot.xyz/ataturk', function (error, response, body) {
    if (error) return console.log('Hata:', error); 
    else if (!error) { 
    var info = JSON.parse(body); 
    var thyke = info.link;
    const ataturk = new Discord.RichEmbed()
    .setColor(0xFFFFFF)
    .setTimestamp()
    .setDescription('')
    .setImage(thyke)
    return message.channel.sendEmbed(ataturk);

    }
});
};

    
    

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'atatürk',
description: 'Rastgele Atatürk Fotoğrafları Atar.',
usage: 'atatürk'
}; 