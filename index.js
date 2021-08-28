require('dotenv/config');
const clientConfig = require('./clientConfig');
const pingPong = require('./commands/pingPong');
const comandos = require('./commands/comandos');

//Chama execução de login
clientConfig.login(process.env.CLIENT_TOKEN);

//Inicia comandos existentes
pingPong.init();
comandos.init();
