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

        client.on('messageCreate', message => {
            if (message.content === '/music') {
                const channel = message.member.voice.channel
                if(channel == null){
                    message.reply("Necessário estar em um canal de voz!")   
                }else{
                    connection = joinVoiceChannel({
                        channelId: channel.id,
                        guildId: channel.guildId,
                        adapterCreator: channel.guild.voiceAdapterCreator,
                    });
                }
            }
        });
    }

    //Retorna client para uso externo
    getClient() {
        return client;
    }
}

module.exports = new clientConfig;