require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js

const client = new Discord.Client(); //create new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//make sure this line is the last line
console.log(process.env.CLIENT_TOKEN);
client.login("5c0cbd9e693f20749b559d3bb7c2b489c3a0232fdc6545bde92be604d6879928"); //login bot using token