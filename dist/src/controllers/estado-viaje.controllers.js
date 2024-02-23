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
const estado_viaje_1 = __importDefault(require("../models/estado_viaje"));
const estado_viajes_repository_1 = require("../repository/estado-viajes.repository");
class EstadoViajeController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_estadoViaje = new estado_viaje_1.default();
                new_estadoViaje.descripcion = req.body.descripcion;
                let estadov = yield new estado_viajes_repository_1.EstadoViajeRepo().save(new_estadoViaje);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created estadoViaje!",
                    estadov
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                yield new estado_viajes_repository_1.EstadoViajeRepo().delete(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted estadoViaje!",
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                const new_estadoViaje = yield new estado_viajes_repository_1.EstadoViajeRepo().retrieveById(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched estadoViaje by id!",
                    data: new_estadoViaje,
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_estadoViaje = yield new estado_viajes_repository_1.EstadoViajeRepo().retrieveAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all estadoViaje data!",
                    data: new_estadoViaje,
                });
            }
            catch (err) {
                console.log(err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                const new_estadoViaje = new estado_viaje_1.default();
                new_estadoViaje.id = id;
                new_estadoViaje.descripcion = req.body.descripcion;
                let estadov = yield new estado_viajes_repository_1.EstadoViajeRepo().update(new_estadoViaje);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated estadoViaje data!",
                    estadov
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
}
exports.default = new EstadoViajeController();
//# sourceMappingURL=estado-viaje.controllers.js.map