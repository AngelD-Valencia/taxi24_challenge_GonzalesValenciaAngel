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
const viaje_1 = __importDefault(require("../models/viaje"));
const viaje_repository_1 = require("../repository/viaje.repository");
const factura_1 = __importDefault(require("../models/factura"));
const factura_repository_1 = require("../repository/factura.repository");
class ViajeController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_viaje = new viaje_1.default();
                new_viaje.lugar_inicial = req.body.lugar_inicial;
                new_viaje.lugar_final = req.body.lugar_final;
                new_viaje.precio = req.body.precio;
                new_viaje.distancia = req.body.distancia;
                new_viaje.fecha_inicial = req.body.fecha_inicial;
                new_viaje.fecha_final = req.body.fecha_final;
                new_viaje.conductor_id = req.body.conductor_id;
                new_viaje.estado_viaje = req.body.estado_viaje;
                new_viaje.usuario_id = req.body.usuario_id;
                let viaje = yield new viaje_repository_1.ViajeRepo().save(new_viaje);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created viaje!",
                    viaje
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
                yield new viaje_repository_1.ViajeRepo().delete(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted viaje!",
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
                const new_viaje = yield new viaje_repository_1.ViajeRepo().retrieveById(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched viaje by id!",
                    data: new_viaje,
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
                const new_viaje = yield new viaje_repository_1.ViajeRepo().retrieveAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all viaje data!",
                    data: new_viaje,
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
                const new_viaje = new viaje_1.default();
                new_viaje.id = id;
                new_viaje.lugar_inicial = req.body.lugar_inicial;
                new_viaje.lugar_final = req.body.lugar_final;
                new_viaje.precio = req.body.precio;
                new_viaje.distancia = req.body.distancia;
                new_viaje.fecha_inicial = req.body.fecha_inicial;
                new_viaje.fecha_final = req.body.fecha_final;
                new_viaje.conductor_id = req.body.conductor_id;
                new_viaje.estado_viaje = req.body.estado_viaje;
                new_viaje.usuario_id = req.body.usuario_id;
                yield new viaje_repository_1.ViajeRepo().update(new_viaje);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated viaje data!",
                    new_viaje
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
    finalizarViaje(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                const fin_viaje = new viaje_1.default();
                fin_viaje.id = id;
                fin_viaje.estado_viaje = "FINALIZADO";
                const new_factura = new factura_1.default();
                new_factura.empresa = "Taxi 24 Challenge";
                new_factura.viaje_id = id;
                let factura = yield new factura_repository_1.FacturaRepo().save(new_factura);
                yield new viaje_repository_1.ViajeRepo().updateViajeFin(fin_viaje);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully viaje finalizado data!",
                    fin_viaje,
                    message2: "Successfully factura data!",
                    factura
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
    getViajesActivos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_viaje = yield new viaje_repository_1.ViajeRepo().findByViajesActivos();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully viajes activos data!",
                    data: new_viaje,
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
}
exports.default = new ViajeController();
//# sourceMappingURL=viaje.controllers.js.map