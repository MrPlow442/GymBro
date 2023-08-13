import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTables1691465778905 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        console.log("Running migration CreateTables1691465778905")
        await queryRunner.createTable(
            new Table({
                name: 'trainings',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'name',
                        type: 'text'
                    },
                    {
                        name: 'description',
                        type: 'text'
                    }
                ]
            })
        )
        await queryRunner.createTable(
            new Table({
                name: 'exercises',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'name',
                        type: 'text'
                    },
                    {
                        name: 'series',
                        type: 'integer'
                    },
                    {
                        name: 'reps_from',
                        type: 'integer'
                    },
                    {
                        name: 'reps_to',
                        type: 'integer'
                    },
                    {
                        name: 'note',
                        type: 'text'
                    },
                    {
                        name: 'training_id',
                        type: 'integer'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('exercises')
        await queryRunner.dropTable('trainings')
    }

}
