const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

 const embedyardim = new Discord.RichEmbed()
  .setAuthor("Komutlar", client.user.displayAvatarURL)
  .setDescription(`**\n *temizle - Belirttiğiniz Kadar Mesaj Siler. \n *reklam-taraması - Oynuyor Yerinde Reklam Olanları Tespit Eder. \n *sunucu-bilgi - Sunucunun Bilgilerini Gösterir. \n *ses-kanal-aç - Ses Kanalı Açar. \n *metin-kanal-aç - Metin Kanalı Açar. \n *kilit - Odayı Kilitler \n *ban - Bot Kişiyi Sunucudan Banlar \n *kick - Bot Kişiyi Sunucudan Atar \n *unban - Bot Kişinin Yasaklamasını Kaldırır \n *sustur - Bot Kişiyi Susturur \n *uyar - İstediğiniz Kişiyi Uyarır.**`)
  .setColor("RANDOM")
  .setFooter(`${message.author.username} tarafından istendi.`)
  .setThumbnail(client.user.avatarURL)
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkılı', 'yetkili'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Yetkili Komutları Gösterir.',
  usage: 'yetkili'
};