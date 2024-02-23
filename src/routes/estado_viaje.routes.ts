import { Router } from "express";
import estadoViajeController from "../controllers/estado-viaje.controllers";

const router = Router();

router.get('/', estadoViajeController.findAll);
router.get('/:id', estadoViajeController.findById);
router.post('/', estadoViajeController.create);
router.put('/:id', estadoViajeController.update);
router.delete('/:id', estadoViajeController.delete);


export default router;