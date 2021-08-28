require('dotenv/config');

const clientConfig = require('./clientConfig');

const comandos = require('./commands/comandos');
const fortniteStatus = require('./commands/fortniteStatus');
const perfil = require('./commands/perfil')
const fortniteNews = require('./commands/fortniteNews')

//Chama execução de login
clientConfig.login(process.env.CLIENT_TOKEN);

//Inicia comandos existentes
comandos.init();
fortniteStatus.init();
fortniteNews.init();
perfil.init();