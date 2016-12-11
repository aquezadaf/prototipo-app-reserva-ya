import { Component } from "@angular/core";

import { NavController } from "ionic-angular";

import { RestaurantData } from "../../providers/restaurant-data";
import { Restaurant } from "../../models/restaurant";

@Component({
    selector: "page-mesas",
    templateUrl: "mesas.html"
})
export class MesasPage {
    fechaReserva: string;
    filtrosMesas: string[];
    restaurant: Restaurant;

    constructor(public navController: NavController, public restaurantData: RestaurantData) {
        this.fechaReserva = new Date().toISOString();
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
}