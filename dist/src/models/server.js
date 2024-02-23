"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usuario_routes_1 = __importDefault(require("../routes/usuario.routes"));
const conductor_routes_1 = __importDefault(require("../routes/conductor.routes"));
const carro_routes_1 = __importDefault(require("../routes/carro.routes"));
const viaje_routes_1 = __importDefault(require("../routes/viaje.routes"));
const factura_routes_1 = __importDefault(require("../routes/factura.routes"));
const conection_1 = __importDefault(require("../database/conection"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios',
            conductores: '/api/conductores',
            carros: '/api/carros',
            viaje: '/api/viaje',
            estadoViaje: '/api/estadoViaje',
            factura: '/api/factura',
        };
        this.app = (0, express_1.default)();
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
    databaseSync() {
        var _a;
        const db = new conection_1.default();
        (_a = db.sequelize) === null || _a === void 0 ? void 0 : _a.sync();
    }
    middlewares() {
        //cors
        this.app.use((0, cors_1.default)());
        //lectura del body
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_routes_1.default);
        this.app.use(this.apiPaths.conductores, conductor_routes_1.default);
        this.app.use(this.apiPaths.carros, carro_routes_1.default);
        this.app.use(this.apiPaths.viaje, viaje_routes_1.default);
        this.app.use(this.apiPaths.factura, factura_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map