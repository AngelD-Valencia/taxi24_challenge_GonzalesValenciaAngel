import { Router } from "express";
import viajeController from "../controllers/viaje.controllers";
import conductorController from "../controllers/conductor.controllers";

const routerViaje = Router();

routerViaje.get('/', viajeController.findAll);
routerViaje.get('/conductores', conductorController.getConductorWithinRadius);
routerViaje.get('/activos', viajeController.getViajesActivos);
routerViaje.post('/', viajeController.create);
routerViaje.get('/:id', viajeController.findById);
routerViaje.put('/:id', viajeController.update);
routerViaje.put('/finalizar/:id', viajeController.finalizarViaje);
routerViaje.delete('/:id', viajeController.delete);


export default routerViaje;