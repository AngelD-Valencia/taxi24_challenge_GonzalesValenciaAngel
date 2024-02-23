import { DataTypes } from "sequelize";
import { Model, Table, Column, DataType, HasMany } from "sequelize-typescript";
import Factura from "./factura";
import Viaje from "./viaje";


@Table({
    tableName: 'Usuario',
})
export class Usuario extends Model {
    @Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        field: 'nombre'
    })
    nombre!: string;
    @Column({
        type: DataType.STRING,
        field: 'apellidos'
    })
    apellidos: string;
    @Column({
        type: DataType.STRING,
        field: 'doc_identidad'
    })
    doc_identidad: string;
    @Column({
        type: DataType.STRING,
        field: 'email'
    })
    email: string;
    @Column({
        type: DataType.STRING,
        field: 'phone'
    })
    phone: string;

    @Column({
        type: DataType.STRING,
        field: 'tipo_persona',
        defaultValue: 'pasajero'
    })
    tipo_persona: string;

    @Column({ 
        type: DataType.FLOAT,
    })
    latitude: number;

    @Column({ 
        type: DataType.FLOAT,
    })
    longitude: number;

    @HasMany(()=> Viaje)
    viaje: Viaje[]
}

export default Usuario;