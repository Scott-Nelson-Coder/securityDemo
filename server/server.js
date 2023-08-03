const express = require('express')
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors())



const {register, login} = require('./controllers/auth.js')


app.post('/api/createUser', register)
app.post('/api/authenticate', login)


app.listen(4004, () => console.log('Party at server 4004'))