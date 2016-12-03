import { Component } from "@angular/core";

import { LoginPage } from "../login/login";
import { CartaPage } from "../carta/carta";
import { MesasPage } from "../mesas/mesas";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tabLogin: any = LoginPage;
  tabCarta: any = CartaPage;
  tabMesas: any = MesasPage;

  constructor() { }
}
