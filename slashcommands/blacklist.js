// CHANGING THE CODE BELOW CAN RESULT IN THE BOT NOT WORKING
const REALLYMAXHEARINGREALLY1234REAL = 100
require('events').EventEmitter.prototype._maxListeners = REALLYMAXHEARINGREALLY1234REAL;
require('events').defaultMaxListeners = REALLYMAXHEARINGREALLY1234REAL;
// ONLY REMOVE THE ABOVE CODE IF YOU KNOW WHAT YOUE DOING
const { Client, ClientUser, MessageEmbed, Intents } = require('discord.js');
const { blacklisted, owners, prefix, botperms } = require('../config/bot.json')
const fs = require("fs")
module.exports = async(client) => {
console.log('Making global command: blacklist')
  try {
client.api.applications(`947733660432490506`).guilds('947968591444205568').commands.post({
        data: {
            name: "blacklist",
            description: "ONLY THE CREATOR CAN RUN THIS COMMAND",
          options: [{ name: 'userid', description: 'Who do you wish to blacklist, HAS TO BE USERID OR ELSE WONT WORK', type: 3, required: true }],
 }})} catch {
    consile.log("blacklist invaild creation")
    return;
  }
  console.log('Created global command: blacklist')
    client.ws.on("INTERACTION_CREATE", async(interaction) => {
      
        const commandId = interaction.data.id;
        const commandName = interaction.data.name;
        
        if (commandName == "blacklist") {
if (blacklisted.includes(interaction.member.user.id)){
  return;
}
      if (!owners.includes(interaction.member.user.id)){
            if (commandName == "blacklist") client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: "ERROR 403, YOU MUST BE THE CREATOR TO RUN THIS COMMAND"
 }
       }
        });
        if (commandName == "blacklist") console.log('A user tried to blacklist somebody but couldnt')
            return;
    }
                if (blacklisted.includes(interaction.data.options[0].value)){
            if (commandName == "blacklist") client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: "ERROR 403, User you tried to blacklist is already blacklisted"
 }
       }
        });
        if (commandName == "blacklist") console.log('You cant blacklist somebody if they are already blacklisted')
            return;
                     }
          // extra security
          if (interaction.member.user.id !== '710227418492960778') return;
          if (commandName == "blacklist") console.log(`⚠️ Slash command ${commandName} ran ⚠️`);

          if (!commandName == "blacklist") {
return;
          }
    fs.readFile("./config/bot.json", (err, data) => {
      let json = JSON.parse(data.toString())
      json["blacklisted"].push(interaction.data.options[0].value)
      fs.writeFile("./config/bot.json", JSON.stringify(json), {}, (err) => {
console.log(err)
})
})
          if (commandName == "blacklist") console.log(`⚠️ Slash command ${commandName} successfully worked ⚠️`);
                    };

if (!commandName == "blacklist") {
return;
}
      
          if (commandName == "blacklist") client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: `Blacklisted ${interaction.data.options[0].value}, next time this bot restarts the user you blacklisted will no longer be able to use this bot`
 }
       }
        });
        })

    };
  