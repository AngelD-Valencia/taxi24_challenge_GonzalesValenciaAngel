import { Request, Response } from "express";
import EstadoViaje from "../models/estado_viaje";
import { EstadoViajeRepo } from "../repository/estado-viajes.repository";

class EstadoViajeController {
    async create(req: Request, res: Response) {
      try {
        const new_estadoViaje = new EstadoViaje();
        new_estadoViaje.descripcion = req.body.descripcion;
  
        let estadov = await new EstadoViajeRepo().save(new_estadoViaje);
  
        res.status(201).json({
          status: "Created!",
          message: "Successfully created estadoViaje!",
          estadov
        });
      } catch (err) {
        res.status(500).json({
          status: "Internal Server Error!",
          message: "Internal Server Error!",
        });
      }
    }
  
    async delete(req: Request, res: Response) {
      try {
        let id = parseInt(req.params["id"]);
        await new EstadoViajeRepo().delete(id);
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully deleted estadoViaje!",
        });
      } catch (err) {
        res.status(500).json({
          status: "Internal Server Error!",
          message: "Internal Server Error!",
        });
      }
    }
  
    async findById(req: Request, res: Response) {
      try {
        let id = parseInt(req.params["id"]);
        const new_estadoViaje = await new EstadoViajeRepo().retrieveById(id);
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully fetched estadoViaje by id!",
          data: new_estadoViaje,
        });
      } catch (err) {
        res.status(500).json({
          status: "Internal Server Error!",
          message: "Internal Server Error!",
        });
      }
    }
  
    async findAll(req: Request, res: Response) {
      try {
        const new_estadoViaje = await new EstadoViajeRepo().retrieveAll();
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully fetched all estadoViaje data!",
          data: new_estadoViaje,
        });
      } catch (err) {
        console.log(err)
        res.status(500).json({
          status: "Internal Server Error!",
          message: "Internal Server Error!",
        });
      }
    }
  
    async update(req: Request, res: Response) {
      try {
        let id = parseInt(req.params["id"]);
        const new_estadoViaje = new EstadoViaje();
  
        new_estadoViaje.id = id;
        new_estadoViaje.descripcion = req.body.descripcion;
  
        let estadov = await new EstadoViajeRepo().update(new_estadoViaje);
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully updated estadoViaje data!",
          estadov
        });
      } catch (err) {
        res.status(500).json({
          status: "Internal Server Error!",
          message: "Internal Server Error!",
        });
      }
    }
  }
  
  export default new EstadoViajeController()