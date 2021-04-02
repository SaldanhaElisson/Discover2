const express = require('express');
const routes = express.Router()

const basePath = __dirname + "/views"

//request, response

routes.get('/', (request, response) => {
    return response.sendFile(basePath + "/index.html")
    // sendFile __ vai ser o caminho absuloto mas as pastas precisam está dentro do src para enviar o html para o servidor, nessa é a pasta vies 
}) // AQUI O SERVER TEM UM METODO CHAMADO GET QUE VAI RODA QUANDO EU DIGITAR NO FINAL DA URL O '/' DEPOIS QUE ELE PERCEBER QUE RECEBEU O '/' ELE VAI EXECUTAR A ARROW FUNCTION QUE NESE CASO TEM COMO ARGUMENTOS O PEDIDO E A RESPOSTA, DEPOIS PRECISAMOS FAZER UM RETURN UTILIZANDO O OBJETO RETURN COM UM METODO 'RESPONSE.SENd' E VAMOS COLOCA NO PARAMETÔ A RESPOSTA DO PEDIDO.


routes.get('/job', (request, response) => response.sendFile(basePath + "/job.html")
    // VAMOS TROOCAR O "SENDfILE" PARA "RENDER" POIS O EJS AGORA VAI REDENRIZRA O HTML QUE ESTÁ JUNTO COM JS E VAI MANDAR PARA O SERVIDOR
    //redireciona para um local
)
routes.get('/job/edit', (req, response) => response.sendFile(basePath + "/job-edit.html")                                                          
    //redireciona para um local
)
routes.get('/profile', (req, response) => response.sendFile(basePath + "/profile.html")
    //redireciona para um local
)


module.exports = routes;

// vai enviar o routes para fora '