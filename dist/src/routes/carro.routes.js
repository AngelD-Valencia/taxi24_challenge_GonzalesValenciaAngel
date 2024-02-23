"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carro_controllers_1 = __importDefault(require("../controllers/carro.controllers"));
const routerCarro = (0, express_1.Router)();
routerCarro.get('/', carro_controllers_1.default.findAll);
routerCarro.get('/:id', carro_controllers_1.default.findById);
routerCarro.post('/', carro_controllers_1.default.create);
routerCarro.put('/:id', carro_controllers_1.default.update);
routerCarro.delete('/:id', carro_controllers_1.default.delete);
exports.default = routerCarro;
//# sourceMappingURL=carro.routes.js.map