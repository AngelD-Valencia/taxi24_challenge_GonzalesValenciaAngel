import { Request, Response } from "express";
import Factura from "../models/factura";
import { FacturaRepo } from "../repository/factura.repository";

class FacturaController {
    async create(req: Request, res: Response) {
      try {
        const new_factura = new Factura();
        new_factura.empresa = req.body.empresa;
        new_factura.viaje_id = req.body.viaje_id;
  
        let factura = await new FacturaRepo().save(new_factura);
  
        res.status(201).json({
          status: "Created!",
          message: "Successfully created factura!",
          factura
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
        await new FacturaRepo().delete(id);
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully deleted factura!",
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
        const new_factura = await new FacturaRepo().retrieveById(id);
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully fetched factura by id!",
          data: new_factura,
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
        const new_factura = await new FacturaRepo().retrieveAll();
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully fetched all factura data!",
          data: new_factura,
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
        const new_factura = new Factura();
  
        new_factura.id = id;
        new_factura.empresa = req.body.empresa;
        new_factura.viaje_id = req.body.viaje_id;
  
        await new FacturaRepo().update(new_factura);
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully updated factura data!",
          new_factura
        });
      } catch (err) {
        res.status(500).json({
          status: "Internal Server Error!",
          message: "Internal Server Error!",
        });
      }
    }
  }
  
  export default new FacturaController()