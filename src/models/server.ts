import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from '../routes/usuario.routes';
import conductorRoutes from '../routes/conductor.routes';
import carroRoutes from '../routes/carro.routes';
import viajeRoutes from '../routes/viaje.routes';
import facturaRoutes from '../routes/factura.routes';
import Database from '../database/conection';

class Server {

    private app: Application;
    private port : string;
    private apiPaths = {
        usuarios: '/api/usuarios',
        conductores: '/api/conductores',
        carros: '/api/carros',
        viaje: '/api/viaje',
        estadoViaje: '/api/estadoViaje',
        factura: '/api/factura',

    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.databaseSync();
        this.middlewares();
        this.routes();

    }

    /*async dbConection() {
        try {
            await db.authenticate();
            console.log('Database online')
        } catch (error : any) {
            throw new Error( error );
        }
    }*/

    protected databaseSync(): void {
        const db = new Database();
        db.sequelize?.sync();
      }

    middlewares(){
        //cors
        this.app.use( cors() );

        //lectura del body
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes)
        this.app.use(this.apiPaths.conductores, conductorRoutes)
        this.app.use(this.apiPaths.carros, carroRoutes)
        this.app.use(this.apiPaths.viaje, viajeRoutes)
        this.app.use(this.apiPaths.factura, facturaRoutes)
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port)
        })
    }
}

export default Server;