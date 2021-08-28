const clientConfig = require('../clientConfig');
const api = require('../services/fortnite.service')

class FortniteNews{
    comando = "/fortniteNews" 
    descricao = "Ao executar o comando /fortniteNews o bot te responde com as notícias atuais do fortnite."
    async init(){
        clientConfig.getClient().on('messageCreate', async message => {
            if (message.content === '/fortniteNews') {
                const dados = await api.getNews()
                return message.reply(dados)
            }
        });
        console.log("FortniteNews ready!") 
    }
}

module.exports = new FortniteNews;



