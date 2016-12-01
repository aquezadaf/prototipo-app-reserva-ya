import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { PlatoData } from "../../providers/plato-data"

@Component({
  selector: "page-carta",
  templateUrl: "carta.html"
})
export class CartaPage {

  constructor(public navCtrl: NavController, public platoData: PlatoData) {}

  ionViewDidLoad() {
    console.log("Hello CartaPage Page");
  }

}
