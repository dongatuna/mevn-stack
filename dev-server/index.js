//const express = require('express')
import express from 'express'
const app = express()

import {registerRoutes} from './routes'
import {setEnvironment} from './config/env'
import {connectToDB} from "./config/db"

//set the environment first
setEnvironment(app)
connectToDB()
registerRoutes(app)

const port = 3000

app.get('/', (req, res) =>{
    
    if(process.env.NODE_ENV !== 'production'){
        return res.send("Running server in development mode.")
    }else{
        return res.sendFile('index.html', {root: __dirname+'/../dist/'})
    }
})

app.listen(port, () => console.log(`MEVN-STACK app listening on port ${port} in ${process.env.NODE_ENV} mode!`))