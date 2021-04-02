const express = require('express');
const routes = express.Router()

//request, response

routes.get('/', (request, response) => {
    return response.sendFile(__dirname + "/views/index.html")
    // sendFile __ vai ser o caminho absuloto mas as pastas precisam está dentro do src para enviar o html para o servidor, nessa é a pasta vies 
}) // AQUI O SERVER TEM UM METODO CHAMADO GET QUE VAI RODA QUANDO EU DIGITAR NO FINAL DA URL O '/' DEPOIS QUE ELE PERCEBER QUE RECEBEU O '/' ELE VAI EXECUTAR A ARROW FUNCTION QUE NESE CASO TEM COMO ARGUMENTOS O PEDIDO E A RESPOSTA, DEPOIS PRECISAMOS FAZER UM RETURN UTILIZANDO O OBJETO RETURN COM UM METODO 'RESPONSE.SENd' E VAMOS COLOCA NO PARAMETÔ A RESPOSTA DO PEDIDO.


routes.get('index.html', (req, res) =>{
    return res.redirect('/')
    //redireciona para um local

})

module.exports= routes;

// vai enviar o routes para fora 