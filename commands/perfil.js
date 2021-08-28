const clientConfig = require('../clientConfig');

class Perfil {
    comando = "/perfil" 
    descricao = "Ao executar o comando /perfil o bot te responde com as características do seu perfil dentro do servidor."
    init(){
        
        clientConfig.getClient().on('messageCreate', message => {
            const user = message.author;
            if (message.content === '/perfil') {
                message.reply(`Nome: ${user.username}, Avatar: ${user.displayAvatarURL({dynamic: false})}`);
            }
        });
        console.log("Perfil ready!")
    }
}

module.exports = new Perfil;

