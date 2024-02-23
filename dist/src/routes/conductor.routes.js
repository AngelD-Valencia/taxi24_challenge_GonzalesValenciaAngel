"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const conductor_controllers_1 = __importDefault(require("../controllers/conductor.controllers"));
const routerConductor = (0, express_1.Router)();
routerConductor.get('/', conductor_controllers_1.default.findAll);
routerConductor.get('/disponibles', conductor_controllers_1.default.findConducDisponibles);
routerConductor.get('/:id', conductor_controllers_1.default.findById);
routerConductor.post('/', conductor_controllers_1.default.create);
routerConductor.put('/:id', conductor_controllers_1.default.update);
routerConductor.delete('/:id', conductor_controllers_1.default.delete);
exports.default = routerConductor;
//# sourceMappingURL=conductor.routes.js.map