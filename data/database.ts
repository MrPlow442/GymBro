import dataSource from "@/data-source";
import { TrainingsRepository } from "@/repositories/TrainingsRepository";
import { DataSource } from "typeorm";

class Repositories {    
    trainingsRepository: TrainingsRepository;

    constructor(dataSource: DataSource) {
        this.trainingsRepository = new TrainingsRepository(dataSource);
    }
 }

export default new Repositories(dataSource);