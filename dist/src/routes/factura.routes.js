"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const factura_controllers_1 = __importDefault(require("../controllers/factura.controllers"));
const routerFactura = (0, express_1.Router)();
routerFactura.get('/', factura_controllers_1.default.findAll);
routerFactura.get('/:id', factura_controllers_1.default.findById);
routerFactura.post('/', factura_controllers_1.default.create);
routerFactura.put('/:id', factura_controllers_1.default.update);
routerFactura.delete('/:id', factura_controllers_1.default.delete);
exports.default = routerFactura;
//# sourceMappingURL=factura.routes.js.map