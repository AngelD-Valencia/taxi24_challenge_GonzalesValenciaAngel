import { Request, Response } from "express";
import Carro from "../models/carro";
import { CarroRepo } from "../repository/carro.repository";

class CarroController {
    async create(req: Request, res: Response) {
      try {
        const new_carro = new Carro();
        new_carro.placa = req.body.placa;
        new_carro.seguro= req.body.seguro;
  
        let carro = await new CarroRepo().save(new_carro);
  
        res.status(201).json({
          status: "Created!",
          message: "Successfully created carro!",
          carro
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
        await new CarroRepo().delete(id);
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully deleted carro!",
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
        const new_carro = await new CarroRepo().retrieveById(id);
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully fetched carro by id!",
          data: new_carro,
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
        const new_carro = await new CarroRepo().retrieveAll();
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully fetched all carro data!",
          data: new_carro,
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
        const new_carro = new Carro();
  
        new_carro.id = id;
        new_carro.placa = req.body.placa;
        new_carro.seguro= req.body.seguro;
  
        let updatc = await new CarroRepo().update(new_carro);
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully updated carro data!",
          updatc
        });
      } catch (err) {
        res.status(500).json({
          status: "Internal Server Error!",
          message: "Internal Server Error!",
        });
      }
    }
  }
  
  export default new CarroController()