const clientConfig = require('../clientConfig');
const api = require('../services/fortnite.service')

class FortineStatus{
    comando = "/fortniteStatus" 
    descricao = "Ao executar o comando /fortniteStatus {nickname} {plataforma : Default = 'epic'} o bot te responde com as estatísticas do seu perfil do fortnite."
    async init(){
        const prefix = '/';

        
        clientConfig.getClient().on('messageCreate', async message  =>  {  
            
            if (!message.content.startsWith(prefix)){
                return;
            }
            const args = message.content.trim().split(/ +/g);
            const cmd = args[0].slice(prefix.length).toLowerCase(); 
        
            if (cmd === 'fortnitestatus') {
                if (!args[1]) {
                    return message.reply('Informe o nickname!');
                }
                if (!args[2]) {
                    args[2] = "epic";
                }
                if (args[3]) {
                    return message.reply('Informe apenas o Nickname');
                }
                const dados = await api.getStats(args[1], args[2])
                  
               // message.member.voice.channel.join();

                return message.reply(dados)

            }
        });




        console.log("FortniteStatus ready!")
    }
}

module.exports = new FortineStatus;



