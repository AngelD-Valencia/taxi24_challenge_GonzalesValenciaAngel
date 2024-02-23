import Factura from "../models/factura";

interface IFacturaRepo {
    save(factura: Factura): Promise<Factura>;
    update(factura: Factura): Promise<void>;
    delete(facturaId: number): Promise<void>;
    retrieveById(facturaId: number): Promise<Factura>;
    retrieveAll(): Promise<Factura[]>;
  }
  

export class FacturaRepo implements IFacturaRepo {

    async save(factura: Factura): Promise<Factura> {
      try {
        let f = await Factura.create({
          empresa: factura.empresa,          
          viaje_id: factura.viaje_id
        });
        return f;
      } catch (error) {
        throw new Error("Failed to create factura!");
      }
    }
    async update(factura: Factura): Promise<void> {
      try {
        const new_factura = await Factura.findOne({
          where: {
            id: factura.id,
          },
        });
        if (!new_factura) {
          throw new Error("Factura not found!");
        }
        new_factura.empresa = factura.empresa;
        new_factura.viaje_id = factura.viaje_id;
  
        await new_factura.save();
      } catch (error) {
        throw new Error("Failed to update factura!");
      }
    }
    async delete(facturaId: number): Promise<void> {
        
      try {
        const new_factura = await Factura.findOne({
          where: {
            id: facturaId,
          },
        });
        if (!new_factura) {
          throw new Error("Factura not found!");
        }
  
        await new_factura.destroy();
      } catch (error) {
        throw new Error("Failed to delete factura!");
      }
    }
    async retrieveById(facturaId: number): Promise<Factura> {
      try {
        const new_factura = await Factura.findOne({
          where: {
            id: facturaId,
          },
        });
        if (!new_factura) {
          throw new Error("Factura not found!");
        }
        return new_factura;
      } catch (error) {
        throw new Error("Failed to buscar por factura!");
      }
    }
    async retrieveAll(): Promise<Factura[]> {
      try {
       return await Factura.findAll();
      } catch (error) {
        throw new Error("Failed to listar facturas!");
      }
    }
    
  }