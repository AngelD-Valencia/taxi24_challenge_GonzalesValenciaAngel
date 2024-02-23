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
exports.CarroRepo = void 0;
const carro_1 = __importDefault(require("../models/carro"));
class CarroRepo {
    save(carro) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let c = yield carro_1.default.create({
                    placa: carro.placa,
                    seguro: carro.seguro
                });
                return c;
            }
            catch (error) {
                throw new Error("Failed to create carro!");
            }
        });
    }
    update(carro) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_carro = yield carro_1.default.findOne({
                    where: {
                        id: carro.id,
                    },
                });
                if (!new_carro) {
                    throw new Error("Carro not found!");
                }
                new_carro.placa = carro.placa;
                new_carro.seguro = carro.seguro;
                let updatec = yield new_carro.save();
                return updatec;
            }
            catch (error) {
                throw new Error("Failed to update carro!");
            }
        });
    }
    delete(carroId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_carro = yield carro_1.default.findOne({
                    where: {
                        id: carroId,
                    },
                });
                if (!new_carro) {
                    throw new Error("Carro not found!");
                }
                yield new_carro.destroy();
            }
            catch (error) {
                throw new Error("Failed to delete carro!");
            }
        });
    }
    retrieveById(carroId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_carro = yield carro_1.default.findOne({
                    where: {
                        id: carroId,
                    },
                });
                if (!new_carro) {
                    throw new Error("Carro not found!");
                }
                return new_carro;
            }
            catch (error) {
                throw new Error("Failed to buscar por carro!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield carro_1.default.findAll();
            }
            catch (error) {
                throw new Error("Failed to listar carros!");
            }
        });
    }
}
exports.CarroRepo = CarroRepo;
//# sourceMappingURL=carro.repository.js.map