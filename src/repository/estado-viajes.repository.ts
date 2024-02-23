import EstadoViaje from "../models/estado_viaje";

interface IEstadoViajeRepo {
    save(estadoViaje: EstadoViaje): Promise<EstadoViaje>;
    update(estadoViaje: EstadoViaje): Promise<EstadoViaje>;
    delete(estadoViajeId: number): Promise<void>;
    retrieveById(estadoViajeId: number): Promise<EstadoViaje>;
    retrieveAll(): Promise<EstadoViaje[]>;
  }
  

export class EstadoViajeRepo implements IEstadoViajeRepo {

    async save(estadoViaje: EstadoViaje): Promise<EstadoViaje> {
      try {
        let ev = await EstadoViaje.create({
          descripcion: estadoViaje.descripcion,
        });

        return ev
      } catch (error) {
        throw new Error("Failed to create estadoViaje!");
      }
    }
    async update(estadoViaje: EstadoViaje): Promise<EstadoViaje> {
      try {
        const new_estadoViaje = await EstadoViaje.findOne({
          where: {
            id: estadoViaje.id,
          },
        });
        if (!new_estadoViaje) {
          throw new Error("EstadoViaje not found!");
        }
        new_estadoViaje.descripcion = estadoViaje.descripcion;
  
        let ev = await new_estadoViaje.save();
        return ev;
      } catch (error) {
        throw new Error("Failed to update estadoViaje!");
      }
    }
    async delete(estadoViajeId: number): Promise<void> {
        
      try {
        const new_estadoViaje = await EstadoViaje.findOne({
          where: {
            id: estadoViajeId,
          },
        });
        if (!new_estadoViaje) {
          throw new Error("EstadoViaje not found!");
        }
  
        await new_estadoViaje.destroy();
      } catch (error) {
        throw new Error("Failed to delete estadoViaje!");
      }
    }
    async retrieveById(estadoViajeId: number): Promise<EstadoViaje> {
      try {
        const new_estadoViaje = await EstadoViaje.findOne({
          where: {
            id: estadoViajeId,
          },
        });
        if (!new_estadoViaje) {
          throw new Error("EstadoViaje not found!");
        }
        return new_estadoViaje;
      } catch (error) {
        throw new Error("Failed to buscar por estadoViaje!");
      }
    }
    async retrieveAll(): Promise<EstadoViaje[]> {
      try {
       return await EstadoViaje.findAll();
      } catch (error) {
        throw new Error("Failed to listar estadoViajes!");
      }
    }
    
  }