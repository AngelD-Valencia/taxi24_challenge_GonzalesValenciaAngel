import { DataTypes } from "sequelize";
import { Model, Table, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import Viaje from "./viaje";
import Usuario from "./usuario";


@Table({
    tableName: 'Factura',
})
export class Factura extends Model {
    @Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        field: 'empresa'
    })
    empresa: string;


    @ForeignKey(() => Viaje)
    @Column({
        type: DataType.INTEGER
    })
    viaje_id:number

}

export default Factura;