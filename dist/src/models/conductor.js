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
exports.Conductor = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const carro_1 = __importDefault(require("./carro"));
const viaje_1 = __importDefault(require("./viaje"));
let Conductor = class Conductor extends sequelize_typescript_1.Model {
};
exports.Conductor = Conductor;
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    }),
    __metadata("design:type", Number)
], Conductor.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        field: 'nombre'
    }),
    __metadata("design:type", String)
], Conductor.prototype, "nombre", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        field: 'apellidos'
    }),
    __metadata("design:type", String)
], Conductor.prototype, "apellidos", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        field: 'doc_identidad'
    }),
    __metadata("design:type", String)
], Conductor.prototype, "doc_identidad", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        field: 'email'
    }),
    __metadata("design:type", String)
], Conductor.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        field: 'phone'
    }),
    __metadata("design:type", String)
], Conductor.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        field: 'permiso_conducir'
    }),
    __metadata("design:type", String)
], Conductor.prototype, "permiso_conducir", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
    }),
    __metadata("design:type", Number)
], Conductor.prototype, "latitude", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
    }),
    __metadata("design:type", Number)
], Conductor.prototype, "longitude", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        field: 'tipo_persona',
        defaultValue: 'conductor'
    }),
    __metadata("design:type", String)
], Conductor.prototype, "tipo_persona", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        field: 'disponible',
        defaultValue: true
    }),
    __metadata("design:type", Boolean)
], Conductor.prototype, "disponible", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => carro_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], Conductor.prototype, "carro_id", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => viaje_1.default),
    __metadata("design:type", Array)
], Conductor.prototype, "viaje", void 0);
exports.Conductor = Conductor = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'Conductor',
    })
], Conductor);
exports.default = Conductor;
//# sourceMappingURL=conductor.js.map