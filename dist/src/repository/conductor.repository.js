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
exports.ConductorRepo = void 0;
const geolib_1 = require("geolib");
const conductor_1 = __importDefault(require("../models/conductor"));
const viaje_1 = __importDefault(require("../models/viaje"));
class ConductorRepo {
    save(conductor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let c = yield conductor_1.default.create({
                    nombre: conductor.nombre,
                    apellidos: conductor.apellidos,
                    doc_identidad: conductor.doc_identidad,
                    email: conductor.email,
                    phone: conductor.phone,
                    permiso_conducir: conductor.permiso_conducir,
                    longitude: conductor.longitude,
                    latitude: conductor.latitude,
                    disponible: conductor.disponible,
                    carro_id: conductor.carro_id,
                });
                return c;
            }
            catch (error) {
                throw new Error("Failed to create conductor!");
            }
        });
    }
    update(conductor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_conductor = yield conductor_1.default.findOne({
                    where: {
                        id: conductor.id,
                    },
                });
                if (!new_conductor) {
                    throw new Error("Conductor not found!");
                }
                new_conductor.nombre = conductor.nombre;
                new_conductor.apellidos = conductor.apellidos;
                new_conductor.doc_identidad = conductor.doc_identidad;
                new_conductor.email = conductor.email;
                new_conductor.phone = conductor.email;
                new_conductor.longitude = conductor.longitude;
                new_conductor.latitude = conductor.latitude;
                new_conductor.disponible = conductor.disponible;
                new_conductor.carro_id = conductor.carro_id;
                yield new_conductor.save();
            }
            catch (error) {
                throw new Error("Failed to update conductor!");
            }
        });
    }
    delete(conductorId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_conductor = yield conductor_1.default.findOne({
                    where: {
                        id: conductorId,
                    },
                });
                if (!new_conductor) {
                    throw new Error("Conductor not found!");
                }
                yield new_conductor.destroy();
            }
            catch (error) {
                throw new Error("Failed to delete conductor!");
            }
        });
    }
    retrieveById(conductorId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_conductor = yield conductor_1.default.findOne({
                    where: {
                        id: conductorId,
                    },
                });
                if (!new_conductor) {
                    throw new Error("Conductor not found!");
                }
                return new_conductor;
            }
            catch (error) {
                throw new Error("Failed to buscar por conductor!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield conductor_1.default.findAll({ include: [viaje_1.default] });
            }
            catch (error) {
                throw new Error("Failed to listar conductors!");
            }
        });
    }
    findConductoesDisponibles() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield conductor_1.default.findAll({
                    where: {
                        disponible: true,
                    },
                });
            }
            catch (error) {
                throw new Error("Failed to listar conductors!");
            }
        });
    }
    findDriversWithinRadius(center, radius) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conductoresDisponibles = yield conductor_1.default.findAll({
                    where: {
                        disponible: true,
                    },
                });
                //console.log(conductoresDisponibles)
                const condDispoCerca = conductoresDisponibles.filter(conductor => {
                    const distance = (0, geolib_1.getDistance)(center, { latitude: conductor.latitude, longitude: conductor.longitude });
                    return distance <= radius;
                });
                //console.log(condDispoCerca)
                return condDispoCerca.slice(0, 3);
            }
            catch (error) {
                throw new Error("Failed to listar conductors!");
            }
        });
    }
}
exports.ConductorRepo = ConductorRepo;
//# sourceMappingURL=conductor.repository.js.map