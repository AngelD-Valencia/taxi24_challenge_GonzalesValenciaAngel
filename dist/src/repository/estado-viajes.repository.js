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
exports.EstadoViajeRepo = void 0;
const estado_viaje_1 = __importDefault(require("../models/estado_viaje"));
class EstadoViajeRepo {
    save(estadoViaje) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let ev = yield estado_viaje_1.default.create({
                    descripcion: estadoViaje.descripcion,
                });
                return ev;
            }
            catch (error) {
                throw new Error("Failed to create estadoViaje!");
            }
        });
    }
    update(estadoViaje) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_estadoViaje = yield estado_viaje_1.default.findOne({
                    where: {
                        id: estadoViaje.id,
                    },
                });
                if (!new_estadoViaje) {
                    throw new Error("EstadoViaje not found!");
                }
                new_estadoViaje.descripcion = estadoViaje.descripcion;
                let ev = yield new_estadoViaje.save();
                return ev;
            }
            catch (error) {
                throw new Error("Failed to update estadoViaje!");
            }
        });
    }
    delete(estadoViajeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_estadoViaje = yield estado_viaje_1.default.findOne({
                    where: {
                        id: estadoViajeId,
                    },
                });
                if (!new_estadoViaje) {
                    throw new Error("EstadoViaje not found!");
                }
                yield new_estadoViaje.destroy();
            }
            catch (error) {
                throw new Error("Failed to delete estadoViaje!");
            }
        });
    }
    retrieveById(estadoViajeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_estadoViaje = yield estado_viaje_1.default.findOne({
                    where: {
                        id: estadoViajeId,
                    },
                });
                if (!new_estadoViaje) {
                    throw new Error("EstadoViaje not found!");
                }
                return new_estadoViaje;
            }
            catch (error) {
                throw new Error("Failed to buscar por estadoViaje!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield estado_viaje_1.default.findAll();
            }
            catch (error) {
                throw new Error("Failed to listar estadoViajes!");
            }
        });
    }
}
exports.EstadoViajeRepo = EstadoViajeRepo;
//# sourceMappingURL=estado-viajes.repository.js.map