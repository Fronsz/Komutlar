const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

 const embedyardim = new Discord.RichEmbed()
  .setAuthor("Komutlar", client.user.displayAvatarURL)
  .setDescription(`** ${prefix}eğlence - Eğlence komutlarını gösterir.** \n ** ${prefix}yetkili - Yetkili komutlarını gösterir.** \n ** ${prefix}kullanıcı - kullanıcı komutlarını gösterir.** \n ** ${prefix}genel - Genel komutlarını gösterir.** \n ** ${prefix}gif - Gif komutlarını gösterir.** \n \n [Destek Sunucusu](https://discord.gg/6YJvbXp) \n [Sunucuna Ekle](https://discordapp.com/oauth2/authorize?client_id=513126642202312719&scope=bot&permissions=805314622)`)
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
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};