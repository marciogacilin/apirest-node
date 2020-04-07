exports.listaContatos = async () => {
    let data = [
        {
            id: 1,
            nome: "João",
            celular: "71987651234"
        },
        {
            id: 2,
            nome: "Maria",
            celular: "71978906745"
        },
        {
            id: 3,
            nome: "Pedro",
            celular: "71998762345"
        }
    ]

    return data
}

exports.createContato = async data => {
    let datas = await this.listaContatos()
    datas.push(data)
    return datas
}