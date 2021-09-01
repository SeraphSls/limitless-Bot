Discord = require('discord.js');

const client = new Discord.Client({
    intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES']
});

let connect;
class clientConfig {
  
    //Executa login
    login(token) {
        client.login(token);

        client.on('ready', () => {
            console.log(`Logged in as ${client.user.tag}!`);
        });
    }

    //Retorna client para uso externo
    getClient() {
        return client;
    }

    getConnection(){
        return connect;
    }

    setConnection(connection){
        connect = connection;
    }
}

module.exports = new clientConfig;