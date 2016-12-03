import { Component } from "@angular/core";

import { LoginPage } from "../login/login"
import { CartaPage } from "../carta/carta"

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tabLogin: any = LoginPage;
  tabCarta: any = CartaPage;

  constructor() { }
}
