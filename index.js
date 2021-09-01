require('dotenv/config');

const clientConfig = require('./clientConfig');

const comandos = require('./commands/comandos');
const fortniteStatus = require('./commands/fortniteStatus');
const perfil = require('./commands/perfil')
const fortniteNews = require('./commands/fortniteNews')
const deleteMessage = require('./commands/delete')
const noCommand = require('./listeners/noCommand.listener')
const mentioned = require('./listeners/mentioned.listener')
const play = require('./commands/play')
const exit = require('./commands/exit')
//Chama execução de login
clientConfig.login(process.env.CLIENT_TOKEN);

//Inicia comandos existentes
comandos.init();
fortniteStatus.init();
fortniteNews.init();
perfil.init();
deleteMessage.init();
play.init()
exit.init()
//Inicia Listeners
noCommand.init();
mentioned.init();