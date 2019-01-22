const Discord = require("discord.js");
    exports.run = (client, message, args, prefix) => {

    let piç = Math.round(Math.random() * 100);
    let user = message.mentions.users.first() || message.author;

    let Embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`**${user.tag} Bence sen %${piç} Piçsin! **`);
    return message.channel.send(Embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'piçlikölçer',
    description: 'Piçliğinizi ölçer',
    usage: 'piçlikölçer'
  };