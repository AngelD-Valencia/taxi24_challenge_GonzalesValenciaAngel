import { getDistance } from "geolib";
import Conductor from "../models/conductor";
import geolib from 'geolib';
import Viaje from "../models/viaje";

interface IConductorRepo {
  save(conductor: Conductor): Promise<Conductor>;
  update(conductor: Conductor): Promise<void>;
  delete(conductorId: number): Promise<void>;
  retrieveById(conductorId: number): Promise<Conductor>;
  retrieveAll(): Promise<Conductor[]>;
  findDriversWithinRadius(center: { latitude: number, longitude: number }, radius: number): Promise<Conductor[]>;
}


export class ConductorRepo implements IConductorRepo {

  async save(conductor: Conductor): Promise<Conductor> {
    try {
      let c = await Conductor.create({
        nombre: conductor.nombre,
        apellidos: conductor.apellidos,
        doc_identidad: conductor.doc_identidad,
        email: conductor.email,
        phone: conductor.phone,
        permiso_conducir: conductor.permiso_conducir,
        longitude: conductor.longitude,
        latitude: conductor.latitude,
        disponible: conductor.disponible,
        carro_id: conductor.carro_id,
      });
      return c;
    } catch (error) {
      throw new Error("Failed to create conductor!");
    }
  }
  async update(conductor: Conductor): Promise<void> {
    try {
      const new_conductor = await Conductor.findOne({
        where: {
          id: conductor.id,
        },
      });
      if (!new_conductor) {
        throw new Error("Conductor not found!");
      }
      new_conductor.nombre = conductor.nombre;
      new_conductor.apellidos = conductor.apellidos;
      new_conductor.doc_identidad = conductor.doc_identidad;
      new_conductor.email = conductor.email;
      new_conductor.phone = conductor.phone;
      new_conductor.longitude = conductor.longitude;
      new_conductor.latitude = conductor.latitude;
      new_conductor.disponible = conductor.disponible;
      new_conductor.carro_id = conductor.carro_id;

      await new_conductor.save();
    } catch (error) {
      throw new Error("Failed to update conductor!");
    }
  }
  async delete(conductorId: number): Promise<void> {

    try {
      const new_conductor = await Conductor.findOne({
        where: {
          id: conductorId,
        },
      });
      if (!new_conductor) {
        throw new Error("Conductor not found!");
      }

      await new_conductor.destroy();
    } catch (error) {
      throw new Error("Failed to delete conductor!");
    }
  }
  async retrieveById(conductorId: number): Promise<Conductor> {
    try {
      const new_conductor = await Conductor.findOne({
        where: {
          id: conductorId,
        },
        include: [Viaje]
      });
      if (!new_conductor) {
        throw new Error("Conductor not found!");
      }
      return new_conductor;
    } catch (error) {
      throw new Error("Failed to buscar por conductor!");
    }
  }
  async retrieveAll(): Promise<Conductor[]> {
    try {
      return await Conductor.findAll({include:[Viaje]});
    } catch (error) {
      throw new Error("Failed to listar conductors!");
    }
  }

  async findConductoesDisponibles(): Promise<Conductor[]> {
    try {
      return await Conductor.findAll({
        where: {
          disponible: true,
        },
      });
    } catch (error) {
      throw new Error("Failed to listar conductors!");
    }
  }

  async findDriversWithinRadius(center: { latitude: number, longitude: number }, radius: number): Promise<Conductor[]> {
    try {
      const conductoresDisponibles = await Conductor.findAll({
        where: {
          disponible: true,
        },
      });
      //console.log(conductoresDisponibles)

      const condDispoCerca = conductoresDisponibles.filter(conductor => {
        const distance = getDistance(center, { latitude: conductor.latitude, longitude: conductor.longitude });
        return distance <= radius;
      });

      //console.log(condDispoCerca)
      return condDispoCerca.slice(0, 3);
    } catch (error) {
      throw new Error("Failed to listar conductors!");
    }
  }


}