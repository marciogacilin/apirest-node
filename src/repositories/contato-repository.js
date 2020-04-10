const mongoose = require('mongoose')
const Contatos = mongoose.model('Contatos')

exports.listaContatos = async () => {
    let data = Contatos.find({})

    return data
}

exports.createContato = async data => {
    let contato = new Contatos(data)
    await contato.save()
    return contato
}

exports.updateContato = async (id, data) => {
    await Contatos.findByIdAndUpdate(id, {
        $set: {
            nome: data.nome,
            email: data.email,
            celular: data.celular
        }
    })
}

exports.deleteContato = async (id) => {
    await Contatos.findOneAndDelete(id)
}