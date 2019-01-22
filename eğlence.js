const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

 const embedyardim = new Discord.RichEmbed()
  .setAuthor("Komutlar", client.user.displayAvatarURL)
  .setDescription(`**\n *havadurumu - Belirtilen İlçenin Hava Durumunu Gösterir. \n *avatar - Resminizi Gösterir. \n *emojiyazı - Yazdığınız Kelimeyi Emoji Halinde Olarak Yazar. \n *afk - Afk Moduna Geçersiniz. \n *çayiç - Çay İçersiniz. \n *sigara - Sigara İçersiniz \n *şifre - Rastgele Şifre Oluşturur \n *coolresim - Cool Resim Atar \n *espiri - Espiri Yapar. \n *inek - İnek Yazdıklarınızı Çevirir. \n *yaz - Yazdıklarınızı Bota Yazdırır. \n *mcödül Minecraft Ödülü Verir. \n *hesapla Bölme,Çarpma vb. Hesaplar.**`)
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
  aliases: ['eglence', 'eğlence'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Eğlence Komutları Gösterir.',
  usage: 'eğlence'
};