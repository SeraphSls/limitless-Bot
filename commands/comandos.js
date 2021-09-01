const clientConfig = require('../clientConfig');
const fs = require('fs');
class Comandos {
    comando = ">comandos" 
    descricao = "Ao executar o comando >comandos o bot te responde com uma lista dos comandos existentes."
    init(){
        let str = '';
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`./${file}`);
            str += `Comando: ${command.comando} \nDescrição: ${command.descricao} \n\n`;
        }

        clientConfig.getClient().on('messageCreate', message => {
            if (message.content === '>comandos') {
                message.reply(str);
            }
        });

        console.log("Comandos ready!")
    }
}

module.exports = new Comandos;

