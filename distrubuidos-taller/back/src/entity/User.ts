import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class usuario {

    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    firstName: string

    @Column()
    userName: string

    @Column()
    lastName: string

    @Column()
    password: string

    @Column()
    correo: string


}
export class prueba {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column()
    rut: string

}
