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
const usuario_1 = __importDefault(require("../models/usuario"));
const usuario_repository_1 = require("../repository/usuario.repository");
class UsuarioController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_usuario = new usuario_1.default();
                new_usuario.nombre = req.body.nombre;
                new_usuario.apellidos = req.body.apellidos;
                new_usuario.doc_identidad = req.body.doc_identidad;
                new_usuario.email = req.body.email;
                new_usuario.longitude = req.body.longitude;
                new_usuario.latitude = req.body.latitude;
                new_usuario.phone = req.body.phone;
                let persona = yield new usuario_repository_1.UsuarioRepo().save(new_usuario);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created usuario!",
                    persona
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
                yield new usuario_repository_1.UsuarioRepo().delete(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted usuario!",
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
                const new_usuario = yield new usuario_repository_1.UsuarioRepo().findById(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched usuario by id!",
                    data: new_usuario,
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
                const new_usuario = yield new usuario_repository_1.UsuarioRepo().findAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all usuario data!",
                    data: new_usuario,
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
                const new_usuario = new usuario_1.default();
                new_usuario.id = id;
                new_usuario.nombre = req.body.nombre;
                new_usuario.apellidos = req.body.apellidos;
                new_usuario.doc_identidad = req.body.doc_identidad;
                new_usuario.email = req.body.email;
                new_usuario.phone = req.body.phone;
                new_usuario.longitude = req.body.longitude;
                new_usuario.latitude = req.body.latitude;
                yield new usuario_repository_1.UsuarioRepo().update(new_usuario);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated usuario data!",
                    new_usuario
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
exports.default = new UsuarioController();
//# sourceMappingURL=usuarios.controllers.js.map