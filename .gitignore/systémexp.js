const Discord = require("discord.js");
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const client = new Discord.Client();

const adapter = new FileSync('database.json')
const db = low(adapter);

db.defaults({ histoires: [], xp: []}).write()

var prefix = ("ç")

bot.on('ready', function() {
    bot.user.setGame("Command: çhelp");
    console.log("Connected");
});

bot.login("NDI3OTY2Njg3Mjk2NjE4NTA2.DZ-jmg.Nj4Uqeh6LzzvWs9uLJtNgrGB7dA");


bot.on('message', message => {

    var msgauthor = message.author.id;

    if(message.author.bot) return;

    if(!db.get("xp").find({user: msgauthor}).value()){
        db.get("xp").push({user: msgauthor, xp: 1}).write();
    }else{
        var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
        console.log(userxpdb)
        var userxp = Object.values(userxpdb)
        console.log(userxp)
        console.log(`Nombre d'xp: ${userxp[1]}`)

        db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();

    if (message.content === prefix + "xp"){
        var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
        var xpfinal = Object.values(xp);
        var xp_embed = new Discord.RichEmbed()
            .setTitle(`Affiche de ${message.author.username}`)
            .setColor('#F4D03F')
            .setDescription("")
            .addField("Nombre total de messages:", `${xpfinal[1]} messages`)
            .setFooter("Pensez à nous envoyer vos suggestion dans la partie adéquate")
        message.channel.send({embed: xp_embed});

      }}})        
