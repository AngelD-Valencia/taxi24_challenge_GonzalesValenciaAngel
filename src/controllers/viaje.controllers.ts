import { Request, Response } from "express";
import Viaje from "../models/viaje";
import { ViajeRepo } from "../repository/viaje.repository";
import Factura from "../models/factura";
import { FacturaRepo } from "../repository/factura.repository";


class ViajeController {
    async create(req: Request, res: Response) {
      try {
        const new_viaje = new Viaje();
        new_viaje.lugar_inicial = req.body.lugar_inicial;
        new_viaje.lugar_final = req.body.lugar_final;
        new_viaje.precio = req.body.precio;
        new_viaje.distancia = req.body.distancia;
        new_viaje.fecha_inicial = req.body.fecha_inicial;
        new_viaje.fecha_final = req.body.fecha_final;
        new_viaje.conductor_id = req.body.conductor_id;
        new_viaje.estado_viaje = req.body.estado_viaje;
        new_viaje.usuario_id = req.body.usuario_id;
  
        let viaje = await new ViajeRepo().save(new_viaje);
  
        res.status(201).json({
          status: "Created!",
          message: "Successfully created viaje!",
          viaje
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
        await new ViajeRepo().delete(id);
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully deleted viaje!",
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
        const new_viaje = await new ViajeRepo().retrieveById(id);
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully fetched viaje by id!",
          data: new_viaje,
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
        const new_viaje = await new ViajeRepo().retrieveAll();
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully fetched all viaje data!",
          data: new_viaje,
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
        const new_viaje = new Viaje();
  
        new_viaje.id = id;
        new_viaje.lugar_inicial = req.body.lugar_inicial;
        new_viaje.lugar_final = req.body.lugar_final;
        new_viaje.precio = req.body.precio;
        new_viaje.distancia = req.body.distancia;
        new_viaje.fecha_inicial = req.body.fecha_inicial;
        new_viaje.fecha_final = req.body.fecha_final;
        new_viaje.conductor_id = req.body.conductor_id;
        new_viaje.estado_viaje = req.body.estado_viaje;
        new_viaje.usuario_id = req.body.usuario_id;
  
        await new ViajeRepo().update(new_viaje);
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully updated viaje data!",
          new_viaje
        });
      } catch (err) {
        res.status(500).json({
          status: "Internal Server Error!",
          message: "Internal Server Error!",
        });
      }
    }

    async finalizarViaje(req: Request, res: Response) {
      try {
        let id = parseInt(req.params["id"]);
        const fin_viaje = new Viaje();
        fin_viaje.id = id;
        fin_viaje.estado_viaje = "FINALIZADO";

        const new_factura = new Factura();
        new_factura.empresa = "Taxi 24 Challenge";
        new_factura.viaje_id = id;

        let factura = await new FacturaRepo().save(new_factura);

        await new ViajeRepo().updateViajeFin(fin_viaje);
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully viaje finalizado data!",
          fin_viaje,
          message2: "Successfully factura data!",
          factura
        });
      } catch (err) {
        res.status(500).json({
          status: "Internal Server Error!",
          message: "Internal Server Error!",
        });
      }
    }

    async getViajesActivos(req: Request, res: Response) {
      try {
        const new_viaje = await new ViajeRepo().findByViajesActivos();
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully viajes activos data!",
          data: new_viaje,
        });
      } catch (err) {
        console.log(err)
        res.status(500).json({
          status: "Internal Server Error!",
          message: "Internal Server Error!",
        });
      }
    }
  }
  
  export default new ViajeController()