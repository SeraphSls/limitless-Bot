const clientConfig = require('../clientConfig');
const joinVoiceChannel = require('@discordjs/voice');
//const adapters = new Map<Snowflake, DiscordGatewayAdapterLibraryMethods>();

class Music {
    comando = "/play" 
    descricao = "Ao executar o comando /play o bot te responde com uma lista dos comandos existentes."
    init(){
        clientConfig.getClient().on('messageCreate', message => {
            if (message.content === '/music') {
                
                const channel = message.member.voice.channel
                console.log(channel.id)
                if(channel == null){
                    message.reply('Canal não encontrado!')
                } else {
                    connection = joinVoiceChannel({
                        channelId: channel.id,
                        guildId: channel.guildId,
                        adapterCreator: channel.guild.voiceAdapterCreator,
                    });
                }
            }
        });

        console.log("Music ready!")
    } 
}

module.exports = new Music;

