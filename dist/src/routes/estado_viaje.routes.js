"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estado_viaje_controllers_1 = __importDefault(require("../controllers/estado-viaje.controllers"));
const router = (0, express_1.Router)();
router.get('/', estado_viaje_controllers_1.default.findAll);
router.get('/:id', estado_viaje_controllers_1.default.findById);
router.post('/', estado_viaje_controllers_1.default.create);
router.put('/:id', estado_viaje_controllers_1.default.update);
router.delete('/:id', estado_viaje_controllers_1.default.delete);
exports.default = router;
//# sourceMappingURL=estado_viaje.routes.js.map