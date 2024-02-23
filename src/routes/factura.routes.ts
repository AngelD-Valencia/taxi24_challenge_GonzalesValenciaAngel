import { Router } from "express";
import facturaController from "../controllers/factura.controllers";

const routerFactura = Router();

routerFactura.get('/', facturaController.findAll);
routerFactura.get('/:id', facturaController.findById);
routerFactura.post('/', facturaController.create);
routerFactura.put('/:id', facturaController.update);
routerFactura.delete('/:id', facturaController.delete);


export default routerFactura;