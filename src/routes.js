const express = require('express');
const routes = express.Router()

const views = __dirname + "/views/"


const profile ={
    name: "Elisson",
    avatar: "https://unavatar.now.sh/github/SaldanhaElisson",
    "monthly-budget":3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4


}

//request, response
routes.get('/', (req, res) => {
    return res.render(views + "index")
    // sendFile __ vai ser o caminho absuloto mas as pastas precisam está dentro do src para enviar o html para o servidor, nessa é a pasta vies 
}) // AQUI O SERVER TEM UM METODO CHAMADO GET QUE VAI RODA QUANDO EU DIGITAR NO FINAL DA URL O '/' DEPOIS QUE ELE PERCEBER QUE RECEBEU O '/' ELE VAI EXECUTAR A ARROW FUNCTION QUE NESE CASO TEM COMO ARGUMENTOS O PEDIDO E A RESPOSTA, DEPOIS PRECISAMOS FAZER UM RETURN UTILIZANDO O OBJETO RETURN COM UM METODO 'RESPONSE.SENd' E VAMOS COLOCA NO PARAMETÔ A RESPOSTA DO PEDIDO.


routes.get('/job', (req, res) => res.render(views + "job")
    // VAMOS TROOCAR O "SENDfILE" PARA "RENDER" POIS O EJS AGORA VAI REDENRIZRA O HTML QUE ESTÁ JUNTO COM JS E VAI MANDAR PARA O SERVIDOR
    //redireciona para um local
)
routes.post('/job', (req, res) => {
    console.log(req.body)
    // aqui estamos dizendo que temos um metodo post no job perto do form, criando a rota
})
   

routes.get('/job/edit', (req, res) => res.render(views + "job-edit")                                                          
    //redireciona para um local
)
routes.get('/profile', (req, res) => res.render(views + "profile", {profile})
    //redireciona para um local
)


module.exports = routes;

// vai enviar o routes para fora '