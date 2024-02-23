import Conductor from "../models/conductor";
import Factura from "../models/factura";
import Viaje from "../models/viaje";
import { FacturaRepo } from "./factura.repository";

interface IViajeRepo {
    save(viaje: Viaje): Promise<Viaje>;
    update(viaje: Viaje): Promise<void>;
    delete(viajeId: number): Promise<void>;
    retrieveById(viajeId: number): Promise<Viaje>;
    retrieveAll(): Promise<Viaje[]>;
  }
  

export class ViajeRepo implements IViajeRepo {

    async save(viaje: Viaje): Promise<Viaje> {
      try {
        let v = await Viaje.create({
          lugar_inicial: viaje.lugar_inicial,
            lugar_final: viaje.lugar_final,
            precio: viaje.precio,
            distancia: viaje.distancia,
            fecha_inicial: viaje.fecha_inicial,
            fecha_final: viaje.fecha_final,
            conductor_id: viaje.conductor_id,
            usuario_id: viaje.usuario_id,
            estado_viaje: viaje.estado_viaje
        });
        return v;
      } catch (error) {
        throw new Error("Failed to create viaje!");
      }
    }
    async update(viaje: Viaje): Promise<void> {
      try {
        const new_viaje = await Viaje.findOne({
          where: {
            id: viaje.id,
          },
        });
        if (!new_viaje) {
          throw new Error("Viaje not found!");
        }
        new_viaje.lugar_inicial = viaje.lugar_inicial;
        new_viaje.lugar_final= viaje.lugar_final;
        new_viaje.precio= viaje.precio;
        new_viaje.distancia= viaje.distancia;
        new_viaje.fecha_inicial= viaje.fecha_inicial;
        new_viaje.fecha_final= viaje.fecha_final;
        new_viaje.conductor_id= viaje.conductor_id;
        new_viaje.estado_viaje= viaje.estado_viaje;
        new_viaje.usuario_id= viaje.usuario_id;
  
        await new_viaje.save();
      } catch (error) {
        throw new Error("Failed to update viaje!");
      }
    }
    async delete(viajeId: number): Promise<void> {
        
      try {
        const new_viaje = await Viaje.findOne({
          where: {
            id: viajeId,
          },
        });
        if (!new_viaje) {
          throw new Error("Viaje not found!");
        }
  
        await new_viaje.destroy();
      } catch (error) {
        throw new Error("Failed to delete viaje!");
      }
    }
    async retrieveById(viajeId: number): Promise<Viaje> {
      try {
        const new_viaje = await Viaje.findOne({
          where: {
            id: viajeId,
          },
        });
        if (!new_viaje) {
          throw new Error("Viaje not found!");
        }
        return new_viaje;
      } catch (error) {
        throw new Error("Failed to buscar por viaje!");
      }
    }
    async retrieveAll(): Promise<Viaje[]> {
      try {
       return await Viaje.findAll({include: [Factura]});
      } catch (error) {
        throw new Error("Failed to listar viajes!");
      }
    }

    async findByViajesActivos(): Promise<Viaje[]> {
      try {
       return await Viaje.findAll({
        where: {
          estado_viaje: "ACTIVO",
        },
       });
      } catch (error) {
        throw new Error("Failed to listar viajes activos!");
      }
    }

    async updateViajeFin(viaje: Viaje): Promise<void> {
      try {
        const new_viaje = await Viaje.findOne({
          where: {
            id: viaje.id,
          },
        });
        if (!new_viaje) {
          throw new Error("Viaje not found!");
        }
  
        new_viaje.estado_viaje= viaje.estado_viaje;
  
        await new_viaje.save();
      } catch (error) {
        throw new Error("Failed to update viaje!");
      }
    }
    
  }