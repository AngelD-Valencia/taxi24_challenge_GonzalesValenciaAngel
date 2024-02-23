import { Request, Response } from "express";
import Conductor from "../models/conductor";
import { ConductorRepo } from "../repository/conductor.repository";
import { UsuarioRepo } from "../repository/usuario.repository";

class ConductorController {
  async create(req: Request, res: Response) {
    try {
      const new_conductor = new Conductor();
      new_conductor.nombre = req.body.nombre;
      new_conductor.apellidos = req.body.apellidos;
      new_conductor.doc_identidad = req.body.doc_identidad;
      new_conductor.email = req.body.email;
      new_conductor.phone = req.body.phone;
      new_conductor.permiso_conducir = req.body.permiso_conducir;
      new_conductor.latitude = req.body.latitude;
      new_conductor.longitude = req.body.longitude;
      new_conductor.disponible = req.body.disponible;
      new_conductor.carro_id = req.body.carro_id;

      console.log(req.body)

      let conductor = await new ConductorRepo().save(new_conductor);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created conductor!",
        conductor
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
      await new ConductorRepo().delete(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted conductor!",
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
      const new_conductor = await new ConductorRepo().retrieveById(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched conductor by id!",
        data: new_conductor,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error! - findById",
        message: "Internal Server Error! - findById ",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const new_conductor = await new ConductorRepo().retrieveAll();

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all conductor data!",
        data: new_conductor,
      });
    } catch (err) {
      console.log(err)
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findConducDisponibles(req: Request, res: Response) {
    try {
      const new_conductor = await new ConductorRepo().findConductoesDisponibles();

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all conductor data!",
        data: new_conductor,
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
      const new_conductor = new Conductor();

      new_conductor.id = id;
      new_conductor.nombre = req.body.nombre;
      new_conductor.apellidos = req.body.apellidos;
      new_conductor.doc_identidad = req.body.doc_identidad;
      new_conductor.email = req.body.email;
      new_conductor.phone = req.body.phone;
      new_conductor.permiso_conducir = req.body.permiso_conducir;
      new_conductor.longitude = req.body.longitude;
      new_conductor.latitude = req.body.latitude;
      new_conductor.disponible = req.body.disponible;
      new_conductor.carro_id = req.body.carro_id;

      await new ConductorRepo().update(new_conductor);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated conductor data!",
        new_conductor
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  
  async getConductorWithinRadius(req: Request, res: Response) {
    try {
      const latitude = req.query.latitude;
      const longitude = req.query.longitude;

      const center = { latitude: Number(latitude), longitude: Number(longitude) };
      const radius = 3000; // 3km

      const conductorsWithinRadius = await new ConductorRepo().findDriversWithinRadius(center, radius);

      console.log(conductorsWithinRadius);
      res.status(200).json({
        status: "Ok!",
        message: "Successfully conductores data!",
        conductorsWithinRadius
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error! - getConductorWithinRadius",
        message: "Internal Server Error! - getConductorWithinRadius",
      });
    }

  }

}

export default new ConductorController()