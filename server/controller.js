module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body

        let data = await db.register_user(username, password)
        res.status(200).send(data[0])
    },

    login: async (req, res) => {
        let db = req.app.get('db')
        let {username, password} = req.body

        let data = await db.login(username, password)
        res.send(data[0])

    },
    getPosts: async (req, res) => {
        const db = req.app.get('db')
        const {myPosts, search} = req.query
        console.log(req.query)

        const grabber = async () => {
            if(myPosts === true && search){
                return await db.get_search(search)
            } else if (myPosts === true){
                return await db.get_posts() 
            } else if (search){
                return await db.get_search_filter(search, myPosts)
            }

        }



        if(Object.keys(req.query).length === 0){
            return res.send(await db.get_posts())
        } else {
            return res.send(await grabber())
        }

    },
    
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}