import { Persona } from "../../persona/entities/persona.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    mail: string;

    @Column()
    password: string;

    @Column()
    direction: string;

    @Column()
    phone: string;

    @OneToOne(()=>Persona,Persona=>Persona.user,{cascade:true})
    persona:Persona;
}