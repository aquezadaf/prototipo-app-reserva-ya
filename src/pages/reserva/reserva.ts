import { Component } from "@angular/core";

import { NavController } from "ionic-angular";

import { RestaurantData } from "../../providers/restaurant-data";
import { Restaurant } from "../../models/restaurant";
import { Mesa } from "../../models/mesa";

@Component({
    selector: "page-reserva",
    templateUrl: "reserva.html"
})
export class ReservaPage {
    private mesasSeleccionadas: Mesa[];
    fechaReserva: string;
    filtrosMesas: string[];
    restaurant: Restaurant;
    mostrarFab: boolean;
    habilitarFab: boolean;

    constructor(public navController: NavController, public restaurantData: RestaurantData) {
        this.mesasSeleccionadas = [];
        this.fechaReserva = new Date().toISOString();
        this.mostrarFab = false;
        this.habilitarFab = false;
        this.generarFiltros();
        this.cargarRestaurant();
    }

    private generarFiltros() {
        this.filtrosMesas = [
            "Fumadores",
            "Aire libre",
            "Sin niños"
        ];
    }

    private cargarRestaurant() {
        this.restaurant = this.restaurantData.getRestaurant();
    }

    seleccionarMesa(mesaSeleccionada: Mesa) {
        let indiceMesa = this.indiceMesaSeleccionada(mesaSeleccionada);
        if (indiceMesa === -1) {
            this.mesasSeleccionadas.push(mesaSeleccionada);
        } else {
            this.mesasSeleccionadas.splice(indiceMesa, 1);
        }
        this.configurarFab();
    }

    private configurarFab() {
        let cantidadMesas = this.mesasSeleccionadas.length;
        switch (cantidadMesas) {
            case 0:
                this.mostrarFab = false;
                this.habilitarFab = false;
                break;
            case 1:
                this.mostrarFab = true;
                this.habilitarFab = true;
                break
            default:
                this.mostrarFab = true;
                this.habilitarFab = false;
                break
        }
    }

    private indiceMesaSeleccionada(mesaSeleccionada: Mesa): number {
        return this.mesasSeleccionadas
            .map(mesa => {
                return mesa.id;
            }).indexOf(mesaSeleccionada.id);
    }
}