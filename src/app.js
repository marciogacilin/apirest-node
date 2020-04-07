const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

//Configração do banco de dados
console.log(process.env.DATABASE_CONNECTION_STRING)
mongoose.connect(process.env.DATABASE_CONNECTION_STRING,{
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

const db = mongoose.connection

db.on('connected', () => {
    console.log('Conexão aberta.')
})

db.on('error', err => {
    console.log(`Erro ocorrido na conexão\n${err}`)
})

db.on('disconnected', () => {
    console.log('Conexão encerrada')
})

process.on('SIGINT', () => {
    db.close(() => {
        console.log('Conexão encerrada após fechamento da aplicação')
        process.exit(0)
    })
})


app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Ler rotas da api
const indexRoutes = require('./routes/index-routes')
const contatoRoutes = require('./routes/contato-routes')

app.use('/', indexRoutes)
app.use('/contato', contatoRoutes)

module.exports = app