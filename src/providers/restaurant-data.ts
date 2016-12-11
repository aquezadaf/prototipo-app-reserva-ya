import { Restaurant } from "../models/restaurant";
import { Mesa } from "../models/mesa";

export class RestaurantData {
    private idMesas: number;

    constructor() {
        this.idMesas = 0;
    }

    getRestaurant(): Restaurant {
        return new Restaurant(this.getMesas());
    }

    private getMesas(): Mesa[] {
        return this.generarMesas(60);
    }

    private generarMesas(cantidadMesas: number): Mesa[] {
        let mesas: Mesa[] = [];
        for (let i = 0; i < cantidadMesas; i++) {
            mesas.push(this.generarMesa(i + 1));
        }
        return mesas;
    }

    private generarMesa(idMesa: number): Mesa {
        let cantidadAsientos = Math.floor(Math.random() * 6) + 1;
        let mesaReservada = Math.random() >= 0.5;
        let permiteFumadores = Math.random() >= 0.5;
        let permiteNiños = Math.random() >= 0.5;
        return new Mesa(idMesa, cantidadAsientos, mesaReservada, permiteFumadores, permiteNiños);
    }
}