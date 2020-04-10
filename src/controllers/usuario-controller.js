const usuarioRepository = require('../repositories/usuario-repository')
const crypt = require('../cryptDecrypt')
const authenticate = require('../authenticate')

exports.login = async (req, res) => {
    let {email, password} = req.body
    
    if (!email || !password){
        return res.status(400).send({message: 'Informe o e-mail e senha do usuário!'})
    }
    try {
        let usuario = usuarioRepository.findByEmail(email)
        if (!usuario){
            return res.status(400).send({message: 'Usuário não encontrado!'})
        }
        if (usuario.password !== crypt.crypt(password)){
            return res.status(400).send({message: 'Acesso negado. Verifique e-mail e senha.'})
        }
        let payload = {
            sub: usuario.id,
            name: usuario.nome
        }
        res.send(authenticate.default.generateToken(payload))
    } catch (error) {
        res.status(400).send({message: error})
    }
}

exports.findByEmail = async (req, res) => {
    let {email} = req.params
    if (!email){
        return res.status(400).send({message: 'Informe e-mail do usuário.'})
    }
    try {
        let data = usuarioRepository.findByEmail(email)
        return res.send(data)
    } catch (error) {
        res.status(400).send({message: error})
    }
}

exports.createUsuario = async (req, res) => {
    try {
        await usuarioRepository.createUsuario(req.body)

        return res.status(201).send({message: 'Usuário criado com sucesso!'})
    } catch (error) {
        return res.status(400).send({message: error})
    }
}

exports.findAll = async (req, res) => {
    try {
        let data = await usuarioRepository.findAll()

        return res.status(200).send(data)
    } catch (error) {
        return res.status(400).send({message: error})
    }
}