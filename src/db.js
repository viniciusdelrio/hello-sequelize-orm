const Sequelize = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

const Post = sequelize.define('posts', {
    title: Sequelize.STRING,
    content: Sequelize.TEXT
})

const Author = sequelize.define('authors', {
    name: Sequelize.STRING,
    lastName: Sequelize.STRING,
    age: Sequelize.INTEGER,
    email: Sequelize.STRING
})

Post.belongsTo(Author, { foreignKey: 'authorId' })

async function migrate() {
    await createTables()
    await seed()
}

async function createTables() {
    await sequelize.sync()
}

async function seed() {
    await Author.create({
        nome: "John",
        sobrenome: "Doe",
        idade: 32,
        email: "john.doe@hacker.com"
    })

    await Post.create({
        title: 'A big picture of the mountain',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        authorId: 1
    })
}

module.exports = {
    migrate: migrate,
    models: {
        Post: Post,
        Author: Author
    }
}