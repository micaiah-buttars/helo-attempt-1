require('dotenv').config()
const express = require('express')
const massive = require('massive')
const controller = require('./controller')

const app = express()
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`Listening on port ${SERVER_PORT}`)
    })
})

app.post('/api/auth/register', controller.register)
app.post('/api/auth/login', controller.login)

app.get('/api/posts/:id', controller.getPosts)
// app.get('/api/posts?', controller.getPosts)
// app.get('/api/posts', controller.getPosts)
// app.get('/api/posts', controller.getPosts)