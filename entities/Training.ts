import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Exercise } from "./Exercise";

@Entity('trainings')
export class Training {
    @PrimaryGeneratedColumn()
    id?: number

    @Column({name: 'name'})
    name: string

    @Column({name: 'description'})
    description?: string

    //user: string
    
    @OneToMany(() => Exercise, (exercise) => exercise.training, {
        cascade: true
    })
    exercises: Exercise[]
}