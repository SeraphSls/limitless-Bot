const clientConfig = require('../clientConfig');

class noCommand {
    init(){
        clientConfig.getClient().on('messageCreate', async message => { 
            if(message.content.includes('/deleteMessages')){ return }
            if (message.content.startsWith('-') || message.content.startsWith('/') || message.content.startsWith('!') || message.content.startsWith('>')){
                
                if(!message.channel.name.toLowerCase().includes('comand' || 'comman')) {
                    const fetched = await message.channel.messages.fetch({
                        limit: 1,
                        });
                    message.channel.bulkDelete(fetched);
                }
            }
        });
    }
}

module.exports = new noCommand;

