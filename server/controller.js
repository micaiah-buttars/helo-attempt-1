module.exports = {
    register: (req, res) => {
        const db = req.app.get('db')


    },
    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body

        // let teacherRes = await db.get_teacher(email) 
        // let teacher = teacherRes[0]

        // if(teacher){
        //     return res.status(409).send('Email address already taken.')
        // }

        // const salt = bcrypt.genSaltSync(10)
        // const hash = bcrypt.hashSync(password, salt)

        let data = await db.register_user(username, password)
        console.log(data[0])

        // req.session.user = data[0]
        res.status(200).send(data[0])
    },

    login: async (req, res) => {
        let db = req.app.get('db')
        let {username, password} = req.body

        let data = await db.login(username, password)

        // req.session.user = data[0]
        res.send(data[0])

    },
    
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}