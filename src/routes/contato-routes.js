const express = require('express')

const router = express.Router()

const contatoController = require('../controllers/contato-controller')

router.get('/', contatoController.listaContatos)
router.post('/', contatoController.createContato)

module.exports = router