import { DataTypes } from "sequelize";
import { Model, Table, Column, DataType, HasOne, BelongsTo, ForeignKey } from "sequelize-typescript";

import Conductor from "./conductor";

@Table({
    tableName: 'Carro',
})
export class Carro extends Model {
    @Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        field: 'placa'
    })
    placa: string;

    @Column({
        type: DataType.STRING,
        field: 'seguro'
    })
    seguro: string;


    /*@ForeignKey(() => Conductor)
    @Column({
        type: DataType.INTEGER
    })
    conductor_id: number*/

    @HasOne(()=> Conductor)//, "conductorId"
    conductor: Conductor

    /*@HasOne(()=> Viaje)//, "conductorId"
    viaje: Viaje*/

}

export default Carro;