Discord = require('discord.js');
const {
    joinVoiceChannel
} = require('@discordjs/voice');
const client = new Discord.Client({
    intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES']
});
class clientConfig {
    //Executa login
    login(token) {
        client.login(token);

        client.on('ready', () => {
            console.log(`Logged in as ${client.user.tag}!`);
        });

        client.on('ready', () => {
            const channel = client.channels.cache.get("235447698533253121");
                                                      
                                                       
            console.log(channel);

            const connection = joinVoiceChannel({
                channelId: channel.id,
                guildId: channel.guildId,
                adapterCreator: channel.guild.voiceAdapterCreator,
                
            });

            //connection.joinVoiceChannel();
            // client.join().then(connec => {
            console.log("batata");
            //})

        });

    }





    //Retorna client para uso externo
    getClient() {
        return client;
    }
}

module.exports = new clientConfig;