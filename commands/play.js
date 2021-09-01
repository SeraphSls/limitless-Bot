Discord = require('discord.js');
const clientConfig = require('../clientConfig');
const {
    joinVoiceChannel
} = require('@discordjs/voice');
const client = clientConfig.getClient()
const connection = clientConfig.getConnection()


class play {
    comando = ">play" 
    descricao = "Ao executar o comando >play o bot toca a música ou playlist informada."
    init() {
        client.on('messageCreate', message => {
            if (message.content === '>play') {
                
                if(connection != null){
                    message.reply("Bot já conectado em um canal de voz!")
                }
                const channel = message.member.voice.channel
                if(channel == null){
                    message.reply("Necessário estar em um canal de voz!")   
                }else{
                    const connection = joinVoiceChannel({
                        channelId: channel.id,
                        guildId: channel.guildId,
                        adapterCreator: channel.guild.voiceAdapterCreator,
                    });
                }
            }
        });
    }
}

module.exports = new play;