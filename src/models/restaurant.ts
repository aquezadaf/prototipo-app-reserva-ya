import { Mesa } from "./mesa";

export class Restaurant {
    constructor(public mesasInterior: Mesa[], public mesasExterior: Mesa[]) { }

    reservarMesa(idMesa: number) {
        let mesa = this.buscarMesa(idMesa);
        mesa.reservada = true;
    }

    private buscarMesa(idMesa: number): Mesa {
        let mesas = this.mesasInterior.concat(this.mesasExterior).filter(mesa => {
            return mesa.id === idMesa;
        });
        if (mesas && mesas[0]) {
            return mesas[0];
        } else {
            return null;
        }
    }
}