import { ExerciseDto } from "./ExerciseDto"

export class TrainingDto {
    id?: number
    name: string
    description?: string 
    _exercises: ExerciseDto[] = []  

    public addExercise(exercise: ExerciseDto) {
        this._exercises.push(exercise)
    }

    get exercises(): ExerciseDto[] {
        return this._exercises;
    }
}