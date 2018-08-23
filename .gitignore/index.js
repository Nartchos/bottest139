const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const db= low(adapter);

db.defaults({ histoires: [], xp: []}).write()

var prefix = ("p!")

bot.on('ready', function() {
    bot.user.setGame("By: Narcos");
    console.log("Connectedç");
});

bot.login("NDgyMjAyMjQwODU4MzI0OTky.DmBe2g.UJNsCifWXSa3GKnewSVY8SJDchQ");

bot.on('message', message => {

    var msgauthor = message.author.id;

    if(message.author.bot)return;

    if(!db.get("xp").find({user: msgauthor}).value()){
        db.get("xp").push({user: msgauthor, xp: 1}).write();
    }else{
        var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
        console.log(userxpdb);
        var userxp = Object.values(userxpdb)
        console.log(userxp)
        console.log(`Nombre d'xp: ${userxp[1]}`)

        db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();
    
    if (message.content === prefix + "xp"){
        var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
        var xpfinal = Object.values(xp);
        var xp_embed = new Discord.RichEmbed(
            .setTitle(`Stat des XP de ${message.author.username}`)
            .setColor('#F4D03F')
            .setDescription("Affichage des XP")
            .addFiel("XP", `${xpfinal[1]} xp`)
            .setFooter("Amuse toi :p")
        message.channel.send({embed: xp_embed});
        )

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

});
