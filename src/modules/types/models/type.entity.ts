import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('types')
export class Types {
    @PrimaryColumn()
    id: number;

    @Column()
    identifier: string;

    @Column()
    generation_id: number;

    @Column()
    damage_class_id: number;
}