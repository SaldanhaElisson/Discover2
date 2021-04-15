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
// estrutura de dados
const jobs = [
    {
        id: 1,
        name: "Pizzaria Guloso",
        "daily-hours": 2,
        "total-hours": 60,
        created_at: Date.now()

    },
    {
    id: 2,
    name: "OneTwo Project",
    "daily-hours": 3,
    "total-hours": 47,
    created_at: Date.now()
}
]

//request, response
routes.get('/', (req, res) => {

    const updateJobs = jobs.map((job) => {

         // settings on job 
        // calcule of remaining timer
        const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()

        const createdDate = new Date(job.created_at)
        // new equality function buildly
        const dueDay = createdDate.getDate() + Number(remainingDays)
        // const dueDate = createdDate.setDate

        return job
    })

   



    return res.render(views + "index", {jobs})
    // sendFile __ vai ser o caminho absuloto mas as pastas precisam está dentro do src para enviar o html para o servidor, nessa é a pasta vies 
}) // AQUI O SERVER TEM UM METODO CHAMADO GET QUE VAI RODA QUANDO EU DIGITAR NO FINAL DA URL O '/' DEPOIS QUE ELE PERCEBER QUE RECEBEU O '/' ELE VAI EXECUTAR A ARROW FUNCTION QUE NESE CASO TEM COMO ARGUMENTOS O PEDIDO E A RESPOSTA, DEPOIS PRECISAMOS FAZER UM RETURN UTILIZANDO O OBJETO RETURN COM UM METODO 'RESPONSE.SENd' E VAMOS COLOCA NO PARAMETÔ A RESPOSTA DO PEDIDO.


routes.get('/job', (req, res) => res.render(views + "job")
    // VAMOS TROOCAR O "SENDfILE" PARA "RENDER" POIS O EJS AGORA VAI REDENRIZRA O HTML QUE ESTÁ JUNTO COM JS E VAI MANDAR PARA O SERVIDOR
    //redireciona para um local
)
routes.post('/job', (req, res) => {
    
    const lastId = jobs[job.length - 1]?.id || 1;
    // search last id
    // the point interrogation and || to use to if or else
    
    jobs.push({
        id: lastId + 1,
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        created_at: Date.now() // to attribute a new Date today
    })
    return res.redirect('/')
    // redirect to a page
    
    //console.log(req.body)
    // req.body only follow to used if I set
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