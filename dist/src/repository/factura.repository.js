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
exports.FacturaRepo = void 0;
const factura_1 = __importDefault(require("../models/factura"));
class FacturaRepo {
    save(factura) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let f = yield factura_1.default.create({
                    empresa: factura.empresa,
                    viaje_id: factura.viaje_id
                });
                return f;
            }
            catch (error) {
                throw new Error("Failed to create factura!");
            }
        });
    }
    update(factura) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_factura = yield factura_1.default.findOne({
                    where: {
                        id: factura.id,
                    },
                });
                if (!new_factura) {
                    throw new Error("Factura not found!");
                }
                new_factura.empresa = factura.empresa;
                new_factura.viaje_id = factura.viaje_id;
                yield new_factura.save();
            }
            catch (error) {
                throw new Error("Failed to update factura!");
            }
        });
    }
    delete(facturaId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_factura = yield factura_1.default.findOne({
                    where: {
                        id: facturaId,
                    },
                });
                if (!new_factura) {
                    throw new Error("Factura not found!");
                }
                yield new_factura.destroy();
            }
            catch (error) {
                throw new Error("Failed to delete factura!");
            }
        });
    }
    retrieveById(facturaId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_factura = yield factura_1.default.findOne({
                    where: {
                        id: facturaId,
                    },
                });
                if (!new_factura) {
                    throw new Error("Factura not found!");
                }
                return new_factura;
            }
            catch (error) {
                throw new Error("Failed to buscar por factura!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield factura_1.default.findAll();
            }
            catch (error) {
                throw new Error("Failed to listar facturas!");
            }
        });
    }
}
exports.FacturaRepo = FacturaRepo;
//# sourceMappingURL=factura.repository.js.map