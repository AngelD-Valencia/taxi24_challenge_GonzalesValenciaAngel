import { Router } from "express";
import carroController from "../controllers/carro.controllers";

const routerCarro = Router();

routerCarro.get('/', carroController.findAll);
routerCarro.get('/:id', carroController.findById);
routerCarro.post('/', carroController.create);
routerCarro.put('/:id', carroController.update);
routerCarro.delete('/:id', carroController.delete);


export default routerCarro;