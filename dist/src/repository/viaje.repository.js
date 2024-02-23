"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViajeRepo = void 0;
const factura_1 = __importDefault(require("../models/factura"));
const viaje_1 = __importDefault(require("../models/viaje"));
class ViajeRepo {
    save(viaje) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let v = yield viaje_1.default.create({
                    lugar_inicial: viaje.lugar_inicial,
                    lugar_final: viaje.lugar_final,
                    precio: viaje.precio,
                    distancia: viaje.distancia,
                    fecha_inicial: viaje.fecha_inicial,
                    fecha_final: viaje.fecha_final,
                    conductor_id: viaje.conductor_id,
                    usuario_id: viaje.usuario_id,
                    estado_viaje: viaje.estado_viaje
                });
                return v;
            }
            catch (error) {
                throw new Error("Failed to create viaje!");
            }
        });
    }
    update(viaje) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_viaje = yield viaje_1.default.findOne({
                    where: {
                        id: viaje.id,
                    },
                });
                if (!new_viaje) {
                    throw new Error("Viaje not found!");
                }
                new_viaje.lugar_inicial = viaje.lugar_inicial;
                new_viaje.lugar_final = viaje.lugar_final;
                new_viaje.precio = viaje.precio;
                new_viaje.distancia = viaje.distancia;
                new_viaje.fecha_inicial = viaje.fecha_inicial;
                new_viaje.fecha_final = viaje.fecha_final;
                new_viaje.conductor_id = viaje.conductor_id;
                new_viaje.estado_viaje = viaje.estado_viaje;
                new_viaje.usuario_id = viaje.usuario_id;
                yield new_viaje.save();
            }
            catch (error) {
                throw new Error("Failed to update viaje!");
            }
        });
    }
    delete(viajeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_viaje = yield viaje_1.default.findOne({
                    where: {
                        id: viajeId,
                    },
                });
                if (!new_viaje) {
                    throw new Error("Viaje not found!");
                }
                yield new_viaje.destroy();
            }
            catch (error) {
                throw new Error("Failed to delete viaje!");
            }
        });
    }
    retrieveById(viajeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_viaje = yield viaje_1.default.findOne({
                    where: {
                        id: viajeId,
                    },
                });
                if (!new_viaje) {
                    throw new Error("Viaje not found!");
                }
                return new_viaje;
            }
            catch (error) {
                throw new Error("Failed to buscar por viaje!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield viaje_1.default.findAll({ include: [factura_1.default] });
            }
            catch (error) {
                throw new Error("Failed to listar viajes!");
            }
        });
    }
    findByViajesActivos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield viaje_1.default.findAll({
                    where: {
                        estado_viaje: "ACTIVOS",
                    },
                });
            }
            catch (error) {
                throw new Error("Failed to listar viajes activos!");
            }
        });
    }
    updateViajeFin(viaje) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_viaje = yield viaje_1.default.findOne({
                    where: {
                        id: viaje.id,
                    },
                });
                if (!new_viaje) {
                    throw new Error("Viaje not found!");
                }
                new_viaje.estado_viaje = viaje.estado_viaje;
                yield new_viaje.save();
            }
            catch (error) {
                throw new Error("Failed to update viaje!");
            }
        });
    }
}
exports.ViajeRepo = ViajeRepo;
//# sourceMappingURL=viaje.repository.js.map