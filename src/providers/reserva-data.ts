import { Injectable } from "@angular/core";
import { Reserva } from "../models/reserva";
import { RestaurantData } from "./restaurant-data";

@Injectable()
export class ReservaData {
    constructor(private restaurantData: RestaurantData) { }

    getReservas(): Reserva[] {
        let restaurant = this.restaurantData.getRestaurant();
        return restaurant.filasMesasExterior[0].map(mesa => {
            return new Reserva("16-12-2016", "13:15", mesa);
        });
    }
}