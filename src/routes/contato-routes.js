const express = require('express')

const router = express.Router()

const contatoController = require('../controllers/contato-controller')

router.get('/', contatoController.listaContatos)
router.post('/', contatoController.createContato)
router.put('/', contatoController.updateContato)
router.delete('/:id', contatoController.deleteContato)

module.exports = router