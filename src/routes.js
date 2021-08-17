const express = require('express');
const routes = express.Router()
const ProfileController = require('./controllers/ProfileController')



const Job = {   
    
    services: {
        remainingDays(job) {
            // settings on job 
            // calcule of remaining timer
            const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()

            const createdDate = new Date(job.created_at)
            // new equality function buildly
            // date when was created the project

            const dueDay = createdDate.getDate() + Number(remainingDays)
            const dueDateInMs = createdDate.setDate(dueDay)

            const timeDiffInMs = dueDateInMs - Date.now()
            // calculete a differ of due Data with date now

            //become milli in day
            const dayInMs = 1000 * 60 * 60 * 24
            const dayDiff = (timeDiffInMs / dayInMs).toFixed()

            return dayDiff
        },

        calculateBudget: (job, valueHour) =>   valueHour * job["total-hours"]

    }
}


//request, response
routes.get('/', Job.controllers.index)


routes.get('/job', Job.controllers.create
    // VAMOS TROOCAR O "SENDfILE" PARA "RENDER" POIS O EJS AGORA VAI REDENRIZRA O HTML QUE ESTÁ JUNTO COM JS E VAI MANDAR PARA O SERVIDOR
    //redireciona para um local
)
routes.post('/job', Job.controllers.save
    // redirect to a page

    //console.log(req.body)
    // req.body only follow to used if I set
    // aqui estamos dizendo que temos um metodo post no job perto do form, criando a rota
)


routes.get('/job/:id', Job.controllers.show
    //redireciona para um local
)
routes.post('/job/:id', Job.controllers.update) 
routes.post('/job/delete/:id', Job.controllers.delete) 
routes.get('/profile', ProfileController.index) 
    //redireciona para um local

routes.post('/profile', ProfileController.update)
module.exports = routes;

// vai enviar o routes para fora '