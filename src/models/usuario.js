const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    nome: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true},
    password: {type: String, required: true, trim: true}
},
{
    toJSON: {
        virtuals: true,
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
        }
    },
    versionKey: false
})

module.exports = mongoose.model('Usuarios', schema, 'Usuarios')