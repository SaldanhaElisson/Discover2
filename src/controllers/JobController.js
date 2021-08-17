module.exports = {
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
                budget: Job.services.calculateBudget(job, profile.data["value-hour"])
            }
        })

        return res.render("index", { jobs: updatedJobs })
    },
    
    create(req, res){
        res.render("job")
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

    },
    show(req, res){
        const jobId = req.params.id
    
        const job = Job.data.find(job => job.id == jobId) // vai verificar em cada array e quando o valor job.id for igual ao jobiD ele vai retorna o valor
        console.log(job)
        
        job.budget = Job.services.calculateBudget(job, profile.data["value-hour"])
        
        if(!job){
            return res.send('Job not found')
        }

        return res.render("job-edit", {job})
    },
    update(req, res){
        const jobId = req.params.id

        const job = Job.data.find(job => Number(job.id) === Number(jobId))

        if(!job){
            return res.send('Job not found!')
        }

        const updatedJob = {
            ...job,
            name:req.body.name,
            "total-hours": req.body["total-hours"],
            "daily-hours": req.body["daily-hours"],
        }

        Job.data = Job.data.map(job => {
            
            if(Number(job.id) ===  Number(jobId)){
                job = updatedJob
            }

            return job
        })

        res.redirect('/job/' + jobId)
    },

    delete(req, res){
        const jobId = req.params.id

        Job.data = Job.data.filter(job => Number(job.id) !== Number(jobId))
        return res.redirect('/')
    }
}