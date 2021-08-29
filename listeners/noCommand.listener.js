const clientConfig = require('../clientConfig');

class NoCommand {
    init(){
        clientConfig.getClient().on('messageCreate', message => {
            if (message.mentions.has(clientConfig.getClient().user)) {
                const user = message.author.username
                const response = `Olá @${user}, eu sou o Limitless Bot, tenho várias funções, mas minha principal é facilitar seu dia a dia no seu sevidor! \nPara saber quais minhas funções é só digitar /comandos, além disso eu não permito que digitem comandos em canais de texto que não se contenham "comando" ou "command" no nome, pra assim, manter seu servidor limpo e organizado.\nFui desenvolvido por dois entusiastas de tecnologia e desenvolvimento:\nMiniguibson#6057 - Guilherme\nSeraphjs#7258 - Welber\nCaso encontre um bug ou tenha alguma sugestão pode nos contatar!`
                return message.reply(response)
            }
         });
        console.log("NoCommand ready!")
    }
}

module.exports = new NoCommand;

