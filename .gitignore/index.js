const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("NDI3OTY2Njg3Mjk2NjE4NTA2.DZ-jmg.Nj4Uqeh6LzzvWs9uLJtNgrGB7dA");
