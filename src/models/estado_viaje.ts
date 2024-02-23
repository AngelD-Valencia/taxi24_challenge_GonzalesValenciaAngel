import { DataTypes } from "sequelize";
import { Model, Table, Column, DataType, HasOne } from "sequelize-typescript";
import Viaje from "./viaje";


@Table({
    tableName: 'Estado_viaje',
})
export class EstadoViaje extends Model {
    @Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        field: 'descripcion'
    })
    descripcion: string;
   
    /*@HasOne(()=> Viaje)//, "conductorId"
    viaje: Viaje*/
}

export default EstadoViaje;