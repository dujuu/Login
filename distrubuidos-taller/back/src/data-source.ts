import "reflect-metadata"
import { DataSource } from "typeorm"
import { usuario } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "scarlet",
    password: "dumus-1-1",
    database: "db_scarlet",
    synchronize: true,
    logging: false,
    entities: [usuario],
    migrations: [],
    subscribers: [],
})
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))