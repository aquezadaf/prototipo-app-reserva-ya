import { Component } from "@angular/core";

import { LoginPage } from "../login/login";
import { CartaPage } from "../carta/carta";
import { ReservaPage } from "../reserva/reserva";
import { RestaurantPage } from "../restaurant/restaurant";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tabLogin: any = LoginPage;
  tabCarta: any = CartaPage;
  tabReserva: any = ReservaPage;
  tabRestaurant: any = RestaurantPage;

  constructor() { }
}
