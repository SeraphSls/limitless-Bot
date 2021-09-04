const clientConfig = require('../clientConfig');
const joinVoiceChannel = require('@discordjs/voice');


class ConnectionConfig {


test(channel){

    const connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guildId,
        adapterCreator: channel.guild.voiceAdapterCreator,
        
    });

}

}

module.exports = new ConnectionConfig;