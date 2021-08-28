const axios = require('axios')

module.exports = {

    async getStats (id, type) {
        try{
            const response = await axios.get(`https://fortnite-api.com/v2/stats/br/v2?name=${id}&accountType=${type}&image=all`)
            const retorno = response.data.data.image
            return retorno;
        }catch(error){
            return "Conta não encontrada!"
        }
    },
    async getNews (id, type) {
        try{
            const response = await axios.get(`https://fortnite-api.com/v2/news/br?language=pt-BR`)
            const retorno = response.data.data.image
            return retorno;
        }catch(error){
            return "notícias não encontradas!"
        }
    }
}