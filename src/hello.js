const db = require("./db");

(async() => {
    console.log("==== APPLYING MIGRATIONS ====")
    await db.migrate()

    console.log("==== DOING SOME OPERATIONS USING REPOSITORY ====")

    // Create
    var post = await db.models.Post.create({
        title: "My new post",
        content: "Just the content of the post",
        authorId: 1
    })
    console.log(post.toJSON())

    // Update
    post.title = "Title Updated"
    await post.save()

    // Find By Id
    post = await db.models.Post.findByPk(post.id)
    console.log(post.toJSON())

    // Delete
    await post.destroy()
    
    // Get All
    posts = await db.models.Post.findAll()
    console.log(JSON.stringify(posts, null, 2))
})()