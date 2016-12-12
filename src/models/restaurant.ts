import { Mesa } from "./mesa";

export class Restaurant {
    public filasMesasInterior: Mesa[][];
    public filasMesasExterior: Mesa[][];
    private cantidadMesasFila;

    constructor(private mesas: Mesa[]) {
        this.cantidadMesasFila = 6;
        this.filasMesasExterior = [];
        this.filasMesasInterior = [];
        this.validarCantidadMesas();
        this.organizarMesas();
    }

    private validarCantidadMesas() {
        let cantidadMesas = this.mesas.length;
        let cantidadFilasMultiplo = cantidadMesas % this.cantidadMesasFila;
        if (cantidadMesas < this.cantidadMesasFila || cantidadFilasMultiplo !== 0) {
            throw new Error("La cantidad de mesas debe ser un multiplo de " + this.cantidadMesasFila);
        }
    }

    private organizarMesas() {
        let filasExterior = this.cantidadFilasExterior();
        let filasInterior = this.cantidadFilasInterior();

        this.organizarMesasGrupo(0, filasInterior, this.filasMesasInterior);
        this.organizarMesasGrupo(filasInterior * this.cantidadMesasFila, filasExterior, this.filasMesasExterior);
    }

    private organizarMesasGrupo(indiceUltimaMesa: number, cantidadFilas: number, arregloContenedor: Mesa[][]) {
        for (let i = 0; i < cantidadFilas; i++) {
            let filaMesa: Mesa[] = [];
            for (let j = 0; j < this.cantidadMesasFila; j++) {
                filaMesa.push(this.mesas[indiceUltimaMesa]);
                indiceUltimaMesa++;
            }
            arregloContenedor.push(filaMesa);
        }
    }

    private cantidadFilasInterior() {
        let cantidadFilas = this.cantidadFilas();
        return cantidadFilas - this.cantidadFilasExterior();
    }

    private cantidadFilasExterior() {
        let cantidadMaximaFilasExterior = 2;
        let cantidadFilas = this.cantidadFilas();
        if (cantidadFilas > cantidadMaximaFilasExterior) {
            return cantidadMaximaFilasExterior;
        }
        return 0;
    }

    private cantidadFilas(): number {
        let cantidadMesas = this.mesas.length;
        return cantidadMesas / this.cantidadMesasFila;
    }

    mesaEnExterior(idMesa: number) {
        let mesas = this.filasMesasExterior.filter(filaMesa => {
            return filaMesa.map(mesa => mesa.id).indexOf(idMesa) > -1;
        });
        if(mesas) {
            return true;
        }
        return false;
    }
}