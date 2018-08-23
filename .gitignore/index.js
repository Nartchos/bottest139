const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("p!")

bot.on('ready', function() {
    bot.user.setGame("By: Narcos");
    console.log("Connectedç");
});

bot.login("NDgyMjAyMjQwODU4MzI0OTky.DmBe2g.UJNsCifWXSa3GKnewSVY8SJDchQ");

bot.on('message', message => {

    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - p!help \n - p!team");
    }

    if (message.content === "salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }

    if (message.content === prefix + "team"){
        message.channel.sendMessage("La team PikaWolf est une team créer par Laval ! Au début, il y avait que Water_Fire_YTB qui s'occuper des recrutements ! Maintenant, nous sommes beaucoups plus :)");
    }
    const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("p!")

bot.on('ready', function() {
    bot.user.setGame("By: Narcos");
    console.log("Connectedç");
});

bot.login("NDgyMjAyMjQwODU4MzI0OTky.DmBe2g.UJNsCifWXSa3GKnewSVY8SJDchQ");

bot.on('message', message => {

    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - p!help \n - p!team");
    }

    if (message.content === "salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }

    if (message.content === prefix + "team"){
        message.channel.sendMessage("La team PikaWolf est une team créer par Laval ! Au début, il y avait que Water_Fire_YTB qui s'occuper des recrutements ! Maintenant, nous sommes beaucoups plus :)");
    }

    if (message.content.startsWith(prefix + "sondage")) {
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        var embed = new Discord.RichEmbed()
            .setDescription("Sondage")
            .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
            .setColor("0xB40404")
        message.guild.channels.find("name", "sondage").sendEmbed(embed)
        .then(function (message) {
            message.react("√")
            message.react("✖")
        }).catch(function() {
        });
        }else{
            return message.reply("Tu n'as pas la permission.")
                                         
});
