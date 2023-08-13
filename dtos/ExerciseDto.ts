import { ScalarOrRange } from "./ScalarOrRange";

export class ExerciseDto {
    id?: number
    name: string
    series: number
    reps: ScalarOrRange
    note?: string = ""
}