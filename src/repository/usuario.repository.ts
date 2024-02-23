import Factura from "../models/factura";
import Usuario from "../models/usuario";
import Viaje from "../models/viaje";

interface IUsuarioRepo {
    save(usuario: Usuario): Promise<Usuario>;
    update(usuario: Usuario): Promise<void>;
    delete(usuarioId: number): Promise<void>;
    findById(usuarioId: number): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
  }
  

export class UsuarioRepo implements IUsuarioRepo {

    async save(usuario: Usuario): Promise<Usuario> {
      try {
        let p = await Usuario.create({
            nombre: usuario.nombre,
            apellidos: usuario.apellidos,
            doc_identidad: usuario.doc_identidad,
            email: usuario.email,
            phone: usuario.phone,   
          });
        return p;
      } catch (error) {
        throw new Error("Failed to create usuario!");
      }
    }
    async update(usuario: Usuario): Promise<void> {
      try {
        const new_usuario = await Usuario.findOne({
          where: {
            id: usuario.id,
          },
        });
        if (!new_usuario) {
          throw new Error("Usuario not found!");
        }
        new_usuario.nombre = usuario.nombre;
        new_usuario.apellidos= usuario.apellidos;
        new_usuario.doc_identidad= usuario.doc_identidad;
        new_usuario.email= usuario.email;
        new_usuario.phone= usuario.phone;
  
        await new_usuario.save();
      } catch (error) {
        throw new Error("Failed to update usuario!");
      }
    }
    async delete(usuarioId: number): Promise<void> {
        
      try {
        const new_usuario = await Usuario.findOne({
          where: {
            id: usuarioId,
          },
        });
        if (!new_usuario) {
          throw new Error("Usuario not found!");
        }
  
        await new_usuario.destroy();
      } catch (error) {
        throw new Error("Failed to delete usuario!");
      }
    }
    async findById(usuarioId: number): Promise<Usuario> {
      try {
        const new_usuario = await Usuario.findOne({
          where: {
            id: usuarioId,
          },
        });
        if (!new_usuario) {
          throw new Error("Usuario not found!");
        }
        return new_usuario;
      } catch (error) {
        throw new Error("Failed to buscar por usuario!");
      }
    }
    async findAll(): Promise<Usuario[]> {
      try {
       return await Usuario.findAll({include:[Viaje], order: ['id']});
      } catch (error) {
        throw new Error("Failed to listar usuarios!");
      }
    }
    
  }