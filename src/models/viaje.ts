import { DataTypes } from "sequelize";
import { Model, Table, Column, DataType, BelongsTo, ForeignKey, HasOne } from "sequelize-typescript";
import EstadoViaje from "./estado_viaje";
import Factura from "./factura";
import Conductor from "./conductor";
import Usuario from "./usuario";


@Table({
    tableName: 'Viaje',
})
export class Viaje extends Model {
    @Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        field: 'lugar_inicial'
    })
    lugar_inicial: string;

    @Column({
        type: DataType.STRING,
        field: 'lugar_final'
    })
    lugar_final: string;

    @Column({
        type: DataType.DECIMAL,
        field: 'precio'
    })
    precio: number;

    @Column({
        type: DataType.STRING,
        field: 'distancia'
    })
    distancia: string;

    @Column({
        type: DataType.DATE,
        field: 'fecha_inicial'
    })
    fecha_inicial: string;

    @Column({
        type: DataType.DATE,
        field: 'fecha_final'
    })
    fecha_final: string;

    @Column({
        type: DataType.STRING,
        field: 'estado_viaje'
    })
    estado_viaje: string

    @ForeignKey(() => Conductor)
    @Column({
        type: DataType.INTEGER
    })
    conductor_id: number

    /*@ForeignKey(() => EstadoViaje)
    @Column({
        type: DataType.INTEGER
    })
    estadoViaje_id: number*/

    @ForeignKey(() => Usuario)
    @Column({
        type: DataType.INTEGER
    })
    usuario_id:number

    @HasOne(()=> Factura)
    factura: Factura
}

export default Viaje;