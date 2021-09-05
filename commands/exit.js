Discord = require('discord.js');
const clientConfig = require('../clientConfig');
const client = clientConfig.getClient()
const queue = clientConfig.getQueue()
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
                    queue.destroy(true);
                    connection.destroy();
                }
            }
        }); 
    }
}

module.exports = new exit;