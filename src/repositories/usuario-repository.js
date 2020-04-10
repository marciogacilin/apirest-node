const mongoose = require('mongoose')
const Usuarios = mongoose.model('Usuarios')

exports.findByEmail = async (value) => {
    let data = await Usuarios.findOne({email: value})
    
    return data
}

exports.createUsuario = async (data) => {
    let usuario = new Usuarios(data)

    await usuario.save()
}

exports.findAll = async () => {
    let data = await Usuarios.find({})

    return data
}