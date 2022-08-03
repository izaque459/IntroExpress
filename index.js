const express = require('express')
const userRoute = require('./routes/userRoute.js')
const userRoutes = require('./routes/userRoute.js')
const app = express()
const porta = 3000

app.get('/',(req,res)=>res.send('ola mundo'))

userRoute(app)

app.listen(porta,()=>console.log("Api funcionando"))