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
exports.UsuarioRepo = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const viaje_1 = __importDefault(require("../models/viaje"));
class UsuarioRepo {
    save(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let p = yield usuario_1.default.create({
                    nombre: usuario.nombre,
                    apellidos: usuario.apellidos,
                    doc_identidad: usuario.doc_identidad,
                    email: usuario.email,
                    phone: usuario.phone,
                });
                return p;
            }
            catch (error) {
                throw new Error("Failed to create usuario!");
            }
        });
    }
    update(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_usuario = yield usuario_1.default.findOne({
                    where: {
                        id: usuario.id,
                    },
                });
                if (!new_usuario) {
                    throw new Error("Usuario not found!");
                }
                new_usuario.nombre = usuario.nombre;
                new_usuario.apellidos = usuario.apellidos;
                new_usuario.doc_identidad = usuario.doc_identidad;
                new_usuario.email = usuario.email;
                new_usuario.phone = usuario.phone;
                yield new_usuario.save();
            }
            catch (error) {
                throw new Error("Failed to update usuario!");
            }
        });
    }
    delete(usuarioId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_usuario = yield usuario_1.default.findOne({
                    where: {
                        id: usuarioId,
                    },
                });
                if (!new_usuario) {
                    throw new Error("Usuario not found!");
                }
                yield new_usuario.destroy();
            }
            catch (error) {
                throw new Error("Failed to delete usuario!");
            }
        });
    }
    findById(usuarioId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_usuario = yield usuario_1.default.findOne({
                    where: {
                        id: usuarioId,
                    },
                });
                if (!new_usuario) {
                    throw new Error("Usuario not found!");
                }
                return new_usuario;
            }
            catch (error) {
                throw new Error("Failed to buscar por usuario!");
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield usuario_1.default.findAll({ include: [viaje_1.default], order: ['id'] });
            }
            catch (error) {
                throw new Error("Failed to listar usuarios!");
            }
        });
    }
}
exports.UsuarioRepo = UsuarioRepo;
//# sourceMappingURL=usuario.repository.js.map