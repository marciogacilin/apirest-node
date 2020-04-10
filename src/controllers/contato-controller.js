const contatoRepository = require('../repositories/contato-repository')

exports.listaContatos = async (req, res) => {
    try {
        let data = await contatoRepository.listaContatos()
        res.send(data)
    } catch (error) {
        res.status(500).send({message: 'Falha ao carregar os dados dos contatos'})
    }
}

exports.createContato = async (req, res) => {
    try {
        let contatoCreated = await contatoRepository.createContato(req.body)
        res.status(201).send(contatoCreated)
    } catch (error) {
        res.status(400).send({message: error})
    }
}

exports.updateContato = async (req, res) => {
    try {
        await contatoRepository.updateContato(req.body.id, req.body)
        res.send({message: 'Contato alterado com sucesso!'})
    } catch (error) {
        res.status(400).send({message: 'Erro ao tentar alterar o contato'})
    }
}

exports.deleteContato = async (req, res) => {
    try {
        await contatoRepository.deleteContato(req.params.id)
        res.send({message: 'Contato removido com sucesso'})
    } catch (error) {
        res.status(400).send({message: error})
    }
}