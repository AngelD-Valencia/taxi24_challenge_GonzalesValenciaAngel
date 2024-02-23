import { Request, Response } from "express";
import Usuario from "../models/usuario";
import { UsuarioRepo } from "../repository/usuario.repository";

class UsuarioController {
    async create(req: Request, res: Response) {
      try {
        const new_usuario = new Usuario();
        new_usuario.nombre = req.body.nombre;
        new_usuario.apellidos = req.body.apellidos;
        new_usuario.doc_identidad = req.body.doc_identidad;
        new_usuario.email = req.body.email;
        new_usuario.longitude = req.body.longitude;
        new_usuario.latitude = req.body.latitude;
        new_usuario.phone = req.body.phone;
  
        let persona = await new UsuarioRepo().save(new_usuario);
  
        res.status(201).json({
          status: "Created!",
          message: "Successfully created usuario!",
          persona
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
        await new UsuarioRepo().delete(id);
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully deleted usuario!",
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
        const new_usuario = await new UsuarioRepo().findById(id);
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully fetched usuario by id!",
          data: new_usuario,
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
        const new_usuario = await new UsuarioRepo().findAll();
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully fetched all usuario data!",
          data: new_usuario,
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
        const new_usuario = new Usuario();
  
        new_usuario.id = id;
        new_usuario.nombre = req.body.nombre;
        new_usuario.apellidos = req.body.apellidos;
        new_usuario.doc_identidad = req.body.doc_identidad;
        new_usuario.email = req.body.email;
        new_usuario.phone = req.body.phone;
        new_usuario.longitude = req.body.longitude;
        new_usuario.latitude = req.body.latitude;
  
        await new UsuarioRepo().update(new_usuario);
  
        res.status(200).json({
          status: "Ok!",
          message: "Successfully updated usuario data!",
          new_usuario
        });
      } catch (err) {
        res.status(500).json({
          status: "Internal Server Error!",
          message: "Internal Server Error!",
        });
      }
    }
  }
  
  export default new UsuarioController()