import { Router } from "express";
import conductorController from "../controllers/conductor.controllers";

const routerConductor = Router();

routerConductor.get('/', conductorController.findAll);
routerConductor.get('/disponibles', conductorController.findConducDisponibles);
routerConductor.get('/:id', conductorController.findById);
routerConductor.post('/', conductorController.create);
routerConductor.put('/:id', conductorController.update);
routerConductor.delete('/:id', conductorController.delete);



export default routerConductor;