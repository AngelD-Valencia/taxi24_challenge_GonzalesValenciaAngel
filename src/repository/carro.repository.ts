import Carro from "../models/carro";

interface ICarroRepo {
    save(carro: Carro): Promise<Carro>;
    update(carro: Carro): Promise<Carro>;
    delete(carroId: number): Promise<void>;
    retrieveById(carroId: number): Promise<Carro>;
    retrieveAll(): Promise<Carro[]>;
  }
  

export class CarroRepo implements ICarroRepo {

    async save(carro: Carro): Promise<Carro> {
      try {
        let c = await Carro.create({
            placa: carro.placa,
            seguro: carro.seguro
          });
          return c;
      } catch (error) {
        throw new Error("Failed to create carro!");
      }
    }
    async update(carro: Carro): Promise<Carro> {
      try {
        const new_carro = await Carro.findOne({
          where: {
            id: carro.id,
          },
        });
        if (!new_carro) {
          throw new Error("Carro not found!");
        }
        new_carro.placa = carro.placa;
        new_carro.seguro= carro.seguro;
  
        let updatec = await new_carro.save();
        return updatec;      
      } catch (error) {
        throw new Error("Failed to update carro!");
      }
    }
    async delete(carroId: number): Promise<void> {
        
      try {
        const new_carro = await Carro.findOne({
          where: {
            id: carroId,
          },
        });
        if (!new_carro) {
          throw new Error("Carro not found!");
        }
  
        await new_carro.destroy();
      } catch (error) {
        throw new Error("Failed to delete carro!");
      }
    }
    async retrieveById(carroId: number): Promise<Carro> {
      try {
        const new_carro = await Carro.findOne({
          where: {
            id: carroId,
          },
        });
        if (!new_carro) {
          throw new Error("Carro not found!");
        }
        return new_carro;
      } catch (error) {
        throw new Error("Failed to buscar por carro!");
      }
    }
    async retrieveAll(): Promise<Carro[]> {
      try {
       return await Carro.findAll();
      } catch (error) {
        throw new Error("Failed to listar carros!");
      }
    }
    
  }