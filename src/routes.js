const express = require('express');
const routes = express.Router()

const views = __dirname + "/views/"


const profile = {
    data : {name: "Elisson",
    avatar: "https://unavatar.now.sh/github/SaldanhaElisson",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4,
    "value-hour": 75,
    },

    controllers : {
        index(req,res){    
            return res.render(views + "profile", { profile: profile.data })
        },

        update(req, res) {
            //req.body para pegar os dados 
            const data = req.body

            //definir quantas semanas tem num ano: 52
            const weeksPerYear = 52
            // remover as semanas de ferias do ano, para pegar quantas semana tem em 1 mês
            const weeksPerMonth = (weeksPerYear - data["vacation-per-year"])/12
           
            // quantas horas por semana
            const weekTotalHours = data["hours-per-day"] * data["days-per-week"]
            
            //quantos horas trabalhas por mes
            const monthlyTotalHours = weekTotalHours +  weeksPerMonth 

            //qual será o valor da minha hora?
            const valueHour = data["value-hour"] = data["monthly-budget"] / monthlyTotalHours

            profile.data = {
                ...profile.data,
                ...req.body,
                "value-hour": valueHour
            }

            return res.redirect('profile')
        }

    }

}
const Job = {
    data: [
        {
            id: 2,
            name: " One two",
            "daily-hours": 3,
            "total-hours": 1,
            created_at: Date.now(),
        }
    ],
    controllers: {
        index(req, res) {
            console.log(Job.data["total-hours"])
            // ajustes no job
            const updatedJobs = Job.data.map((job) => {
                const remainig = Job.services.remainingDays(job)
                const status = remainig <= 0 ? 'done' : 'progress'
                return {
                    ...job,
                    remainig,
                    status,
                    budget: profile.data["value-hour"] * job["total-hours"]
                }
            })

            return res.render(views + "index", { jobs: updatedJobs })
        },
        
        create(req, res){
            res.render(views + "job")
        },

        save(req, res) {
            const lastId = Job.data[Job.data.length - 1]?.id || 1;
            // search last id
            // the point interrogation and || to use like if or else

            jobs.push({
                id: lastId + 1,
                name: req.body.name,
                "daily-hours": req.body["daily-hours"],
                "total-hours": req.body["total-hours"],
                created_at: Date.now() // to attribute a new Date today
            })
            return res.redirect('/')

        }
    },
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
        }

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


routes.get('/job/edit', (req, res) => res.render(views + "job-edit")
    //redireciona para um local
)
routes.get('/profile', profile.controllers.index) 
    //redireciona para um local

routes.post('/profile', profile.controllers.update)
module.exports = routes;

// vai enviar o routes para fora '