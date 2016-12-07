import { Component } from "@angular/core";

import { LoginPage } from "../login/login";
import { CartaPage } from "../carta/carta";
import { MesasPage } from "../mesas/mesas";
import { RestaurantPage } from "../restaurant/restaurant";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tabLogin: any = LoginPage;
  tabCarta: any = CartaPage;
  tabMesas: any = MesasPage;
  tabRestaurant: any = RestaurantPage;

  constructor() { }
}
