import { ScalarOrRange } from "./ScalarOrRange";

export class Exercise {
    name: string
    series: number
    reps: ScalarOrRange
    note: string = ""

    constructor(name: string, series: number, reps: ScalarOrRange, note?: string) {
        this.name = name;
        this.series = series;
        this.reps = reps;
        this.note = note ?? "";
    }
}