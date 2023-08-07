import { Exercise } from "./Exercise"

export class Training {
    name: string
    description?: string 
    _exercises: Exercise[] = []
    constructor(name: string, description?: string) {
        this.name = name,
        this.description = description
    }

    public addExercise(exercise: Exercise) {
        this._exercises.push(exercise)
    }

    get exercises(): Exercise[] {
        return this._exercises;
    }
}