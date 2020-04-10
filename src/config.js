const fs = require('fs')
const path = require('path')

/*const privateKey = fs.readFileSync(path.resolve(__dirname, './private.key'), 'utf8')
const publicKey = fs.readFileSync(path.resolve(__dirname, './public.key'), 'utf8')*/

module.exports = {
    privateKey: fs.readFileSync(path.resolve(__dirname, './private.key'), 'utf8'),
    publicKey: fs.readFileSync(path.resolve(__dirname, './public.key'), 'utf8'),
    authOptions: {
        expiresIn: '120s',
        algorithm: 'RS256',
    }
}

/*export default {
    privateKey,
    publicKey,
    authOptions: {
        expiresIn: '120s',
        algorithm: 'RS256',
    }
}*/