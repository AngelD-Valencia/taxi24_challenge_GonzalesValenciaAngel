"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Viaje = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const factura_1 = __importDefault(require("./factura"));
const conductor_1 = __importDefault(require("./conductor"));
const usuario_1 = __importDefault(require("./usuario"));
let Viaje = class Viaje extends sequelize_typescript_1.Model {
};
exports.Viaje = Viaje;
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    }),
    __metadata("design:type", Number)
], Viaje.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        field: 'lugar_inicial'
    }),
    __metadata("design:type", String)
], Viaje.prototype, "lugar_inicial", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        field: 'lugar_final'
    }),
    __metadata("design:type", String)
], Viaje.prototype, "lugar_final", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL,
        field: 'precio'
    }),
    __metadata("design:type", Number)
], Viaje.prototype, "precio", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        field: 'distancia'
    }),
    __metadata("design:type", String)
], Viaje.prototype, "distancia", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        field: 'fecha_inicial'
    }),
    __metadata("design:type", String)
], Viaje.prototype, "fecha_inicial", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        field: 'fecha_final'
    }),
    __metadata("design:type", String)
], Viaje.prototype, "fecha_final", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        field: 'estado_viaje'
    }),
    __metadata("design:type", String)
], Viaje.prototype, "estado_viaje", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => conductor_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], Viaje.prototype, "conductor_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => usuario_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], Viaje.prototype, "usuario_id", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => factura_1.default),
    __metadata("design:type", factura_1.default)
], Viaje.prototype, "factura", void 0);
exports.Viaje = Viaje = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'Viaje',
    })
], Viaje);
exports.default = Viaje;
//# sourceMappingURL=viaje.js.map