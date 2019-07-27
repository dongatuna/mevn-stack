import express from 'express'
import morgan from 'morgan'
import cors from 'cors' 
import bodyParse from 'body-parser'

export function setEnvironment(app){
    if(process.env.NODE_ENV !== 'production'){
        setDevEnv(app)
    } else {
        setProdEnv(app)
    }

}

function setDevEnv(app){
    process.env.NODE_ENV = 'development'
    process.env.DB_URL = ""
    app.use(bodyParse.json())
    app.use(morgan('dev'))
    app.use(cors())
}

function setProdEnv(app){
    process.env.NODE_ENV = 'production'
    process.env.DB_URL = ""
    app.use(bodyParse.json())
    //takes the build folder and serve it a static
    app.use(express.static(__dirname +"/../dist"))
}