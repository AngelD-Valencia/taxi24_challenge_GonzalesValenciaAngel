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
const carro_1 = __importDefault(require("../models/carro"));
const carro_repository_1 = require("../repository/carro.repository");
class CarroController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_carro = new carro_1.default();
                new_carro.placa = req.body.placa;
                new_carro.seguro = req.body.seguro;
                let carro = yield new carro_repository_1.CarroRepo().save(new_carro);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created carro!",
                    carro
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
                yield new carro_repository_1.CarroRepo().delete(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted carro!",
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
                const new_carro = yield new carro_repository_1.CarroRepo().retrieveById(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched carro by id!",
                    data: new_carro,
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
                const new_carro = yield new carro_repository_1.CarroRepo().retrieveAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all carro data!",
                    data: new_carro,
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
                const new_carro = new carro_1.default();
                new_carro.id = id;
                new_carro.placa = req.body.placa;
                new_carro.seguro = req.body.seguro;
                let updatc = yield new carro_repository_1.CarroRepo().update(new_carro);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated carro data!",
                    updatc
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
exports.default = new CarroController();
//# sourceMappingURL=carro.controllers.js.map