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
        let datas = await contatoRepository.createContato(req.body)
        res.status(201).send(datas)
    } catch (error) {
        res.status(400).send({message: 'Erro ao tentar incluir um contato'})
    }
}