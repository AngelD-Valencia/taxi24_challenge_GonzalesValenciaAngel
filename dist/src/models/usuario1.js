"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../database/conection"));
const Usuario = conection_1.default.define('Usuario', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: 'nombre'
    },
    apellidos: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: 'apellidos'
    },
    doc_identidad: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: 'doc_identidad'
    },
    email: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: 'email'
    },
    phone: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'phone'
    },
}, {
    timestamps: true,
});
exports.default = Usuario;
//# sourceMappingURL=usuario1.js.map