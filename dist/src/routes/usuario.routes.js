"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controllers_1 = __importDefault(require("../controllers/usuarios.controllers"));
const routerUsuario = (0, express_1.Router)();
routerUsuario.get('/', usuarios_controllers_1.default.findAll);
routerUsuario.get('/:id', usuarios_controllers_1.default.findById);
routerUsuario.post('/', usuarios_controllers_1.default.create);
routerUsuario.put('/:id', usuarios_controllers_1.default.update);
routerUsuario.delete('/:id', usuarios_controllers_1.default.delete);
exports.default = routerUsuario;
//# sourceMappingURL=usuario.routes.js.map