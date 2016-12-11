import { Restaurant } from "../models/restaurant";
import { Mesa } from "../models/mesa";

export class RestaurantData {
    private idMesas: number;

    constructor() {
        this.idMesas = 0;
    }

    getRestaurant(): Restaurant {
        return new Restaurant(this.getMesasInterior(), this.getMesasExterior());
    }

    private getMesasInterior(): Mesa[] {
        return [
            new Mesa(this.idMesas++, 4, false, false, true),
            new Mesa(this.idMesas++, 4, true, false, true),
            new Mesa(this.idMesas++, 4, false, false, true),

            new Mesa(this.idMesas++, 2, true, false, false),
            new Mesa(this.idMesas++, 2, true, false, false),
            new Mesa(this.idMesas++, 2, false, false, false),

            new Mesa(this.idMesas++, 4, true, false, true),
            new Mesa(this.idMesas++, 4, true, false, true),
            new Mesa(this.idMesas++, 4, false, false, true),

            new Mesa(this.idMesas++, 2, true, false, false),
            new Mesa(this.idMesas++, 2, true, false, false),
            new Mesa(this.idMesas++, 2, false, false, false),

            new Mesa(this.idMesas++, 4, true, false, true),
            new Mesa(this.idMesas++, 4, true, false, true),
            new Mesa(this.idMesas++, 4, false, false, true),

            new Mesa(this.idMesas++, 2, true, false, false),
            new Mesa(this.idMesas++, 2, true, false, false),
            new Mesa(this.idMesas++, 2, false, false, false),

            new Mesa(this.idMesas++, 4, true, false, true),
            new Mesa(this.idMesas++, 4, true, false, true),
            new Mesa(this.idMesas++, 4, false, false, true),

            new Mesa(this.idMesas++, 2, true, false, false),
            new Mesa(this.idMesas++, 2, true, false, false),
            new Mesa(this.idMesas++, 2, false, false, false)

        ];
    }

    private getMesasExterior(): Mesa[] {
        return [
            new Mesa(this.idMesas++, 6, true, true, false),
            new Mesa(this.idMesas++, 6, true, true, false),
            new Mesa(this.idMesas++, 6, false, true, false),

            new Mesa(this.idMesas++, 6, true, false, true),
            new Mesa(this.idMesas++, 6, false, false, true),
            new Mesa(this.idMesas++, 6, true, false, true),

            new Mesa(this.idMesas++, 6, false, true, false),
            new Mesa(this.idMesas++, 6, false, true, false),
            new Mesa(this.idMesas++, 6, false, true, false),

            new Mesa(this.idMesas++, 6, false, false, true),
            new Mesa(this.idMesas++, 6, false, false, true),
            new Mesa(this.idMesas++, 6, true, false, true)
        ];
    }

    // private generarMesas(cantidadFilasMesas: number): Mesa[] {
    //     let mesas: Mesa[];
    //     for (let i = 0; i < cantidadFilasMesas; i++) {
    //         for (let j = 0; i < this.cantidadMesasFila; j++) {
    //             mesas.push(new Mesa(1, ));
    //         }
    //     }
    // }
}