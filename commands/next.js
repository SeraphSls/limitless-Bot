Discord = require('discord.js');
const clientConfig = require('../clientConfig');

const client = clientConfig.getClient()
const connection = clientConfig.getConnection()
let queue = clientConfig.getQueue()
class next {
    comando = ">next"
    descricao = "Ao executar o comando >next o bot toca a próxima musica da fila."
    init() {
        
        client.on('messageCreate', async message  => {
            if (message.content.includes('>')) {
                
                console.log(queue);
                queue.skip();
                queue.play();
                clientConfig.setConnection(connection);
                clientConfig.setQueue(queue);
            }
        });
    }
}

module.exports = new next;