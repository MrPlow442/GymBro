import { ExerciseDto } from "@/dtos/ExerciseDto";
import { ScalarOrRange } from "@/dtos/ScalarOrRange";
import { TrainingDto } from "@/dtos/TrainingDto";
import { Exercise } from "@/entities/Exercise";
import { Training } from "@/entities/Training";
import { DataSource, Repository } from "typeorm";

export class TrainingsRepository {
    private ormRepository: Repository<Training>

    constructor(dataSource: DataSource) {
        this.ormRepository = dataSource.getRepository(Training)
    }

    public async getAll(): Promise<TrainingDto[]> {
        const trainings: Training[] = await this.ormRepository.find();
        console.log("FOUND", trainings)        
        return trainings.map(this.mapTrainingToDto);
    }

    public async clearAll() {
        await this.ormRepository.clear();
    }

    public async getByName(name: string): Promise<TrainingDto | null> {
        const training: Training | null = await this.ormRepository.findOneBy({
            name
        })
        return training !== null ? this.mapTrainingToDto(training) : null;
    }

    public async save(training: TrainingDto) {
        const entity: Training = this.mapDtoToTraining(training)
        console.log("Saving", entity)
        await this.ormRepository.save(entity);
    }

    private mapTrainingToDto(training: Training) : TrainingDto {
        const dto = new TrainingDto();
        dto.id = training.id
        dto.name = training.name
        dto.description = training.description
        if (training.exercises === undefined) {
            return dto;
        }
        for(const exercise of training.exercises) {
            dto.addExercise(this.mapExerciseToDto(exercise))
        }
        return dto
    }

    private mapDtoToTraining(dto: TrainingDto) : Training {
        const training = new Training();
        training.id = dto.id;
        training.name = dto.name;
        training.description = dto.description;
        training.exercises = dto.exercises.map(this.mapDtoToExercise)
        return training;
    }

    private mapExerciseToDto(exercise: Exercise) : ExerciseDto {
        const dto = new ExerciseDto();
        dto.id = exercise.id;
        dto.name = exercise.name;
        dto.series = exercise.series;
        dto.reps = new ScalarOrRange(exercise.repsFrom, exercise.repsTo);
        dto.note = exercise.note;
        return dto;
    }

    private mapDtoToExercise(dto: ExerciseDto) : Exercise {
        const exercise = new Exercise();
        exercise.id = dto.id;
        exercise.name = dto.name;
        exercise.series = dto.series;
        exercise.repsFrom = dto.reps.from;
        exercise.repsTo = dto.reps.to;
        exercise.note = dto.note;
        return exercise;
    }
}