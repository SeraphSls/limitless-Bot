Discord = require('discord.js');
const clientConfig = require('../clientConfig');

const {Player} = require('discord-player');
const {QueryType} = require('discord-player');

const {
    joinVoiceChannel
} = require('@discordjs/voice');

const {
    createAudioPlayer
} = require('@discordjs/voice');

const {
    createAudioResource,
    NoSubscriberBehavior
} = require('@discordjs/voice');

const {
    AudioPlayerStatus
} = require('@discordjs/voice');

const {
    VoiceConnectionStatus
} = require('@discordjs/voice');

const client = clientConfig.getClient()
const connection = clientConfig.getConnection()
let queue = clientConfig.getQueue
class play {
    comando = ">play"
    descricao = "Ao executar o comando >play o bot toca a música ou playlist informada."
    init() {
        
        client.on('messageCreate', async message  => {
            const cmd = message.content
            let query = cmd.substring(6, cmd.length)
            
            if (message.content.includes('>play')) {
                
                if(query.length < 1){
                    message.reply("Favor informar uma música, link ou playlist")
                    return;
                }
                if (connection != null) {
                    message.reply("Bot já conectado em um canal de voz!")
                }
                
                const channel = message.member.voice.channel
                if (channel == null) {
                    message.reply("Necessário estar em um canal de voz!")
                } else {
                    
                    const connection = joinVoiceChannel({
                        channelId: channel.id,
                        guildId: channel.guildId,
                        adapterCreator: channel.guild.voiceAdapterCreator,
                    });

                    const play = new Player(clientConfig.getClient());
                    if(!query.includes('.com')){
                        query = query + ' lyrics';
                    }
                  
                    const searchResult = await play
                        .search(query, {
                        requestedBy: message.member,
                        searchEngine: QueryType.AUTO,
                        })
                        .catch(() => {});
                    
                    if(queue.length < 1){    
                        queue = await play.createQueue(channel.guild, {
                            metadata: channel,
                        });
                    }
                    try {
                        if (!queue.connection) await queue.connect(message.member.voice.channel);
                    } catch {
                        void play.deleteQueue(channel.guildId);
                        return void message.followUp({
                        content: 'Não foi possível conectar no canal de voz!',
                        });
                    }

                    queue.addTrack(searchResult.tracks[0]);
                    message.reply(`Música ${searchResult.tracks[0]} adicionada na fila meu paladino!`)
                    console.log(queue.playing)
                    if (!queue.playing) {
                        queue.play();
                    }
                    
                    clientConfig.setConnection(connection);
                    clientConfig.setQueue(queue);
                }
            }
        });
    }
}

module.exports = new play;