const clientConfig = require('../clientConfig');

class Mentioned {
    init(){
        clientConfig.getClient().on('messageCreate', async message => { 
            if(message.content.includes('/deleteMessages')){ return }
            if (message.content.startsWith('-') || message.content.startsWith('/') || message.content.startsWith('!') || message.content.startsWith('>')){
                
                if(!message.channel.name.toLowerCase().includes('comand' || 'comman')) {
                    const fetched = await message.channel.messages.fetch({
                        limit: 2,
                        });
                    message.channel.bulkDelete(fetched);
                }
            }
        });
        console.log("Mentioned ready!")
    }
}

module.exports = new Mentioned;

