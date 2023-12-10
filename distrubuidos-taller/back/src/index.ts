import { AppDataSource } from "./data-source"
import { usuario } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new usuario()
    user.firstName = "juan"
    user.userName = "duju"
    user.lastName = "meneses"
    user.password = "admin"
    user.correo = "juan@gmail.com"
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(usuario)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
