import { Router } from "express";
import usuarioController from "../controllers/usuarios.controllers";

const routerUsuario = Router();

routerUsuario.get('/', usuarioController.findAll);
routerUsuario.get('/:id', usuarioController.findById);
routerUsuario.post('/', usuarioController.create);
routerUsuario.put('/:id', usuarioController.update);
routerUsuario.delete('/:id', usuarioController.delete);


export default routerUsuario;