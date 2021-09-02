Discord = require('discord.js');
const clientConfig = require('../clientConfig');
const client = clientConfig.getClient()
class exit {
    comando = ">exit" 
    descricao = "Ao executar o comando >exit o bot sai do canal de voz."
    init() {
         client.on('messageCreate', message => {
            const connection = clientConfig.getConnection()
            if (message.content === '>exit') {
                const channel = message.member.voice.channel
                if(channel == null){
                    message.reply("Necessário estar em um canal de voz!")   
                }else{
                    connection.destroy();
                }
            }
        }); 
    }
}

module.exports = new exit;