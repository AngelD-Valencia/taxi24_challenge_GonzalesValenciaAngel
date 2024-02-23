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
const factura_1 = __importDefault(require("../models/factura"));
const factura_repository_1 = require("../repository/factura.repository");
class FacturaController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_factura = new factura_1.default();
                new_factura.empresa = req.body.empresa;
                new_factura.viaje_id = req.body.viaje_id;
                let factura = yield new factura_repository_1.FacturaRepo().save(new_factura);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created factura!",
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
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                yield new factura_repository_1.FacturaRepo().delete(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted factura!",
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
                const new_factura = yield new factura_repository_1.FacturaRepo().retrieveById(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched factura by id!",
                    data: new_factura,
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
                const new_factura = yield new factura_repository_1.FacturaRepo().retrieveAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all factura data!",
                    data: new_factura,
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
                const new_factura = new factura_1.default();
                new_factura.id = id;
                new_factura.empresa = req.body.empresa;
                new_factura.viaje_id = req.body.viaje_id;
                yield new factura_repository_1.FacturaRepo().update(new_factura);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated factura data!",
                    new_factura
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
exports.default = new FacturaController();
//# sourceMappingURL=factura.controllers.js.map