const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoute.js')
const userRoutes = require('./routes/userRoute.js')
const app = express()

const porta = 3000

app.use(bodyParser.urlencoded({extend:false}))
app.get('/',(req,res)=>res.send('ola mundo'))

userRoute(app)

app.listen(porta,()=>console.log("Api funcionando"))