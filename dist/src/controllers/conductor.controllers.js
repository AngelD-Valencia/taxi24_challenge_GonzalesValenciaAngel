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
const conductor_1 = __importDefault(require("../models/conductor"));
const conductor_repository_1 = require("../repository/conductor.repository");
class ConductorController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_conductor = new conductor_1.default();
                new_conductor.nombre = req.body.nombre;
                new_conductor.apellidos = req.body.apellidos;
                new_conductor.doc_identidad = req.body.doc_identidad;
                new_conductor.email = req.body.email;
                new_conductor.phone = req.body.phone;
                new_conductor.permiso_conducir = req.body.permiso_conducir;
                new_conductor.latitude = req.body.latitude;
                new_conductor.longitude = req.body.longitude;
                new_conductor.disponible = req.body.disponible;
                new_conductor.carro_id = req.body.carro_id;
                console.log(req.body);
                let conductor = yield new conductor_repository_1.ConductorRepo().save(new_conductor);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created conductor!",
                    conductor
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
                yield new conductor_repository_1.ConductorRepo().delete(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted conductor!",
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
                const new_conductor = yield new conductor_repository_1.ConductorRepo().retrieveById(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched conductor by id!",
                    data: new_conductor,
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error! - findById",
                    message: "Internal Server Error! - findById ",
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_conductor = yield new conductor_repository_1.ConductorRepo().retrieveAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all conductor data!",
                    data: new_conductor,
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
    findConducDisponibles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_conductor = yield new conductor_repository_1.ConductorRepo().findConductoesDisponibles();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all conductor data!",
                    data: new_conductor,
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
                const new_conductor = new conductor_1.default();
                new_conductor.id = id;
                new_conductor.nombre = req.body.nombre;
                new_conductor.apellidos = req.body.apellidos;
                new_conductor.doc_identidad = req.body.doc_identidad;
                new_conductor.email = req.body.email;
                new_conductor.phone = req.body.phone;
                new_conductor.permiso_conducir = req.body.permiso_conducir;
                new_conductor.longitude = req.body.longitude;
                new_conductor.latitude = req.body.latitude;
                new_conductor.disponible = req.body.disponible;
                new_conductor.carro_id = req.body.carro_id;
                yield new conductor_repository_1.ConductorRepo().update(new_conductor);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated conductor data!",
                    new_conductor
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
    getConductorWithinRadius(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const latitude = req.query.latitude;
                const longitude = req.query.longitude;
                const center = { latitude: Number(latitude), longitude: Number(longitude) };
                const radius = 3000; // 3km
                const conductorsWithinRadius = yield new conductor_repository_1.ConductorRepo().findDriversWithinRadius(center, radius);
                console.log(conductorsWithinRadius);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully conductores data!",
                    conductorsWithinRadius
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error! - getConductorWithinRadius",
                    message: "Internal Server Error! - getConductorWithinRadius",
                });
            }
        });
    }
}
exports.default = new ConductorController();
//# sourceMappingURL=conductor.controllers.js.map