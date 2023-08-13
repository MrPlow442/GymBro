import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Training } from "./Training";

@Entity('exercises')
export class Exercise {
    @PrimaryGeneratedColumn()
    id?: number

    @Column({name: 'name'})
    name: string

    @Column({name: 'series'})
    series: number

    @Column({name: 'reps_from'})
    repsFrom: number

    @Column({name: 'reps_to'})
    repsTo: number

    @Column({name: 'note'})
    note?: string

    @ManyToOne(() => Training, (training) => training.exercises)
    training: Training
}