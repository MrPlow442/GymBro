import { DataSource, DataSourceOptions } from "typeorm";
import { Training } from "./entities/Training";
import { Exercise } from "./entities/Exercise";
import { CreateTables1691465778905 } from "./data/migrations/1691465778905-CreateTables"

const options: DataSourceOptions = {
    type: "expo",
    database: 'GymBro',
    driver: require('expo-sqlite'),
    entities: [
        Training,
        Exercise
    ],
    //synchronize: true
    migrations: [
        CreateTables1691465778905
    ],
    migrationsTableName: 'migrations',
    migrationsRun: true
};

const dataSource = new DataSource(options)

dataSource.initialize().then(() => {
    console.log("Data source has been initialized")
}).catch((err) => {
    console.log("Error during Data Source initialization", err)
})
 
export default dataSource;