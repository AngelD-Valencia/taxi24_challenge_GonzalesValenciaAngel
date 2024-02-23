"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const viaje_controllers_1 = __importDefault(require("../controllers/viaje.controllers"));
const conductor_controllers_1 = __importDefault(require("../controllers/conductor.controllers"));
const routerViaje = (0, express_1.Router)();
routerViaje.get('/', viaje_controllers_1.default.findAll);
routerViaje.get('/conductores', conductor_controllers_1.default.getConductorWithinRadius);
routerViaje.get('/activos', viaje_controllers_1.default.getViajesActivos);
routerViaje.post('/', viaje_controllers_1.default.create);
routerViaje.get('/:id', viaje_controllers_1.default.findById);
routerViaje.put('/:id', viaje_controllers_1.default.update);
routerViaje.put('/finalizar/:id', viaje_controllers_1.default.finalizarViaje);
routerViaje.delete('/:id', viaje_controllers_1.default.delete);
exports.default = routerViaje;
//# sourceMappingURL=viaje.routes.js.map