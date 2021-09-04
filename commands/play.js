Discord = require('discord.js');
const clientConfig = require('../clientConfig');

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

const resource = createAudioResource('D:/limitless-Bot/music/venom.mp3');






class play {
    comando = ">play"
    descricao = "Ao executar o comando >play o bot toca a música ou playlist informada."
    init() {
        client.on('messageCreate', message => {
            if (message.content === '>play') {

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

                    
                    connection.on(VoiceConnectionStatus.Ready, () => {
                        console.log('The connection has entered the Ready state - ready to play audio!');
                    });

                    connection.on(AudioPlayerStatus.Playing, () => {
                        console.log('The audio player has started playing!');
                    });

                    clientConfig.setConnection(connection);

                    const player = createAudioPlayer({
                        behaviors: {
                            noSubscriber: NoSubscriberBehavior.Pause,
                        },
                    });


                    //console.log('conteudo do arquivo de audio', resource);
                    //resource.volume.setVolume(0.5);
                    player.play(resource);

                    
                    connection.subscribe(player);

                }
            }
        });




    }
}

module.exports = new play;