const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuario-controller')


router.get('/', usuarioController.findAll)
router.post('/login', usuarioController.login)
router.post('/', usuarioController.createUsuario)

module.exports = router