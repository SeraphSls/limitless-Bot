const clientConfig = require('../clientConfig');

class DeleteMessages {
    comando = "/deleteMessages" 
    descricao = "Ao executar o comando /deleteMessages o bot te responde com as características do seu perfil dentro do servidor."
    init(){
        
        clientConfig.getClient().on('messageCreate', async message => {
            
            const prefix = '/';
            if (!message.content.startsWith(prefix)){
                return;
            }
            const args = message.content.trim().split(/ +/g);
            const cmd = args[0].slice(prefix.length).toLowerCase(); 
        
            if (cmd === 'deletemessages') {
                if (!args[1]) {
                    return message.reply('Informe a quantidade de mensagens a serem apagadas!');
                }
                if (args[2]) {
                    return message.reply('Informe apenas a quantidade');
                }
                
                const fetched = await message.channel.messages.fetch({
                    limit: ++args[1],
                    });
                message.channel.bulkDelete(fetched);
            } 
            
        });
       


    }
}

module.exports = new DeleteMessages;

