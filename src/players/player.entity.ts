import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'players'})
export class Player{

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true})
    name: string

    @Column({nullable: true})
    level: number

    @Column({nullable: true})
    rank: number

    @Column({nullable: true})
    winrate: number

}