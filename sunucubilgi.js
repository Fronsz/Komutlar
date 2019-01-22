const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
console.log("Sunucu bilgi kullanıldı:"+message.author.username + message.author.id)
const sbilgi = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription('**-Sunucu Bilgileri-**')
.addField('Sunucu Adı:',message.guild.name)
.addField('Sunucu Id\'si:',message.guild.id)
.addField('Sunucu sahibi:',message.guild.owner)
.addField('Kullanıcı sayısı:',message.guild.memberCount)
.addField('Kanal sayısı:',message.guild.channels.size)
.addField('AFK kanalı:',message.guild.afkChannel)
.addField('Bölge:',message.guild.region)
.addField('Doğrulama seviyesi:',message.guild.verificationLevel)
.addField('Kuruluş tarihi:',message.guild.createdAt)
.setFooter(ayarlar.botname+" 2018 │ Owner: ! ɌⱢ ↬ Fronsz#0001 ");
message.channel.send(sbilgi)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sb'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-bilgi',
  description: 'SS',
  usage: 'SS'
};