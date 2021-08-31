const clientConfig = require('../clientConfig');
const player = require('discord-player')
const voice = require('@discordjs/voice')
clientConfig.getClient().player = player;

const adapters = new Map<Snowflake, DiscordGatewayAdapterLibraryMethods>();

class Music {
    comando = "/play" 
    descricao = "Ao executar o comando /play o bot te responde com uma lista dos comandos existentes."
    init(){
        clientConfig.getClient().on('messageCreate', message => {
            if (message.content === '/music') {
                let voiceChanel = message.guild.channels.cache.find( channel => channel.id === '709903788269633642')
                const channel = message.guild.channels.cache.get("709903788269633642");
                if(voiceChanel == null){
                    message.reply('Canal não encontrado!')
                } else {
                    console.log(channel);
                    this.connectToChannel(channel);
                }
            }
        });

        console.log("Music ready!")
    }

    async connectToChannel(channel) {
        const connection = voice.joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: this.createDiscordJSAdapter(channel),
        });
    
        try {
            await voice.entersState(connection, VoiceConnectionStatus.Ready, 30e3);
            return connection;
        } catch (error) {
            connection.destroy();
            throw error;
        }
    }

    createDiscordJSAdapter(channel) {
        return (methods) => {
            adapters.set(channel.guild.id, methods);
            trackClient(channel.client);
            trackGuild(channel.guild);
            return {
                sendPayload(data) {
                    if (channel.guild.shard.status === Constants.Status.READY) {
                        channel.guild.shard.send(data);
                        return true;
                    }
                    return false;
                },
                destroy() {
                    return adapters.delete(channel.guild.id);
                },
            };
        };
    }
}

module.exports = new Music;

