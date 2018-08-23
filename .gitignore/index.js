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
    if (message.content === prefix + "issou"){
        message.channel.sendMessage("La team PikaWolf est une team créer par Laval ! Au début, il y avait que Water_Fire_YTB qui s'occuper des recrutements ! Maintenant, nous sommes beaucoups plus :)");
    }
                         
});
