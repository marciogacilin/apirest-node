const express = require('express')

const router = express.Router()

const authorization = require('../authorization')

const contatoController = require('../controllers/contato-controller')

router.get('/', authorization.protectRoute, contatoController.listaContatos)
router.post('/', contatoController.createContato)
router.put('/', contatoController.updateContato)
router.delete('/:id', contatoController.deleteContato)

module.exports = router