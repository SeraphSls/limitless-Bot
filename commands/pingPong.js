const clientConfig = require('../clientConfig');

class PingPong {
    comando = "/ping" 
    descricao = "Ao executar o comando /ping o bot te responde com um Pong."
    init(){
        clientConfig.getClient().on('messageCreate', msg => {
            if (msg.content === '/ping') {
                msg.reply('Pong!');
            }
        });
        console.log("PingPong ready!")
    }
}

module.exports = new PingPong;

