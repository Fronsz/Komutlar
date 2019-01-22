const Discord = require('discord.js');
exports.run = (client, message, params) => {
var Random = [
' Adlı kullanıcının malatafı 21 cm! Ɛ--------------------->',
' Adlı kullanıcının malatafı 1 cm! Ɛ->**',
' Adlı kullanıcının malatafı 11 cm! Ɛ----------->',
' Adlı kullanıcının malatafı 25 cm! Ɛ------------------------->',
' Adlı kullanıcının malatafı 18 cm! Ɛ------------------>',
' Adlı kullanıcının malatafı 12 cm! Ɛ------------>',
' Adlı kullanıcının malatafı 9 cm! Ɛ--------->',
' Adlı kullanıcının malatafı 31 cm! Ɛ------------------------------->',
' Adlı kullanıcının malatafı 32 cm! Ɛ-------------------------------->',
' Adlı kullanıcının malatafı 5 cm! Ɛ----->',
' Adlı kullanıcının malatafı 10 cm! Ɛ---------->',
' Adlı kullanıcının malatafı 2 cm! Ɛ-->',
];
var kaçcm = Math.floor(Math.random()*Random.length);
const söz = new Discord.RichEmbed()
.setAuthor(message.author.username + `${Random[kaçcm]}`)
.setColor("#015efc")
.setTimestamp()
console.log("kaçcm komutu " + message.author.username + " tarafından kullanıldı.")
message.channel.send(söz)
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'kaçcm',
description: 'kaçcm',
usage: 'kaçcm'
};