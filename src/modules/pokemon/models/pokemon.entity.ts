import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('pokemon')
export class Pokemon {
    @PrimaryColumn()
    id: number;

    @Column()
    identifier: string;

    @Column()
    species_id: number;

    @Column()
    height: number;

    @Column()
    weight: number;

    @Column()
    base_experience: number;

    @Column()
    order: number;

    @Column()
    is_default: number;
}