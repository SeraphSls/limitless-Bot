Discord = require('discord.js');
const clientConfig = require('../clientConfig');

const client = clientConfig.getClient()
const connection = clientConfig.getConnection()


class Pause{

    comando = ">pause" 
    descricao = "Pause command."
    init(){
        
        client.on('messageCreate', async message  => {

        });


    }



}