const Sequelize = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

const criarBanco = (async() => {
    const Postagem = sequelize.define('postagens', {
        titulo: Sequelize.STRING,
        conteudo: Sequelize.TEXT
    })
    
    const Usuario = sequelize.define('usuarios', {
        nome: Sequelize.STRING,
        sobrenome: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        email: Sequelize.STRING
    })
    
    await sequelize.sync()
    
    await Postagem.create({
        titulo: 'Um Título Qualquer',
        conteudo: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
    })

    await Usuario.create({
        nome: "John",
        sobrenome: "Doe",
        idade: 32,
        email: "john.doe@hacker.com"
    })
})()