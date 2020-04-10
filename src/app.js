const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const authorization = require('./authorization')

//Configração do banco de dados
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

//Registra os models
const Contatos = require('./models/contato')
const Usuarios = require('./models/usuario')

//Ler rotas da api
const indexRoutes = require('./routes/index-routes')
const contatoRoutes = require('./routes/contato-routes')
const usuarioRoutes = require('./routes/usuario-routes')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(authorization.verifyToken)

app.use('/', indexRoutes)
app.use('/contato', contatoRoutes)
app.use('/usuario', usuarioRoutes)

module.exports = app