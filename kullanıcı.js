const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

 const embedyardim = new Discord.RichEmbed()
  .setAuthor("Komutlar", client.user.displayAvatarURL)
  .setDescription(`**\n *avatar - Resminizi Gösterir.** **\n *afk - Afk Moduna Geçiş Yaparsınız.** **\n *havadurumu - Belirtilen İlçenin Hava Durumunu Gösterir.** **\n *saat - Saati Gösterir.** **\n *sunucuresmi - Sunucunun Resmimi Gösterir.** \n *metin-kanal-aç - Metin Kanalı Açar. \n *kilit Odayı Kilitler \n *ban Bot Kişiyi Sunucudan Banlar \n *kick :: Bot Kişiyi Sunucudan Atar \n *unban Bot Kişinin Yasaklamasını Kaldırır \n *sustur Bot Kişiyi Susturur \n *uyar İstediğiniz Kişiyi Uyarır.**`)
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
  aliases: ['kullanıcı', 'kullanici'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Yetkili Komutları Gösterir.',
  usage: 'kullanıcı'
};