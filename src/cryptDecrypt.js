const crypto = require('crypto')
const config = require('./config')
const alg = 'aes-256-ctr'
const pwd = config.privateKey

const crypt = text => {
    let cipher = crypto.createCipher(alg, pwd)

    return cipher.update(text, 'utf8', 'hex')
}

const decrypt = text => {
    let decipher = crypto.createDecipher(ald, pwd)

    return decipher.update(text, 'hex', 'utf8')
}

module.exports = {
    crypt,
    decrypt
}