const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.send({titulo: 'Exercício API com NodeJS', versao: '1.0.0'})
})

module.exports = router