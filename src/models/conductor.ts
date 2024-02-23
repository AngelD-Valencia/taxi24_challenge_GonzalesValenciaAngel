import { DataTypes } from "sequelize";
import { Model, Table, Column, DataType, HasOne, ForeignKey, HasMany } from "sequelize-typescript";
import Carro from "./carro";
import Viaje from "./viaje";

@Table({
    tableName: 'Conductor',
})
export class Conductor extends Model {
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
    nombre: string;
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
        field: 'permiso_conducir'
    })
    permiso_conducir: string;

    @Column({ 
        type: DataType.FLOAT,
    })
    latitude: number;

    @Column({ 
        type: DataType.FLOAT,
    })
    longitude: number;

    @Column({
        type: DataType.STRING,
        field: 'tipo_persona',
        defaultValue: 'conductor'
    })
    tipo_persona: string;

    @Column({
        type: DataType.BOOLEAN,
        field: 'disponible',
        defaultValue: true
        
    })
    disponible: boolean;

    @ForeignKey(() => Carro)
    @Column({
        type: DataType.INTEGER
    })
    carro_id: number

    @HasMany(()=> Viaje)
    viaje: Viaje[]
}

export default Conductor;