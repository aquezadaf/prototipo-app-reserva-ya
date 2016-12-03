import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { PlatoData } from "../../providers/plato-data"
import { Plato } from "../../models/plato"

@Component({
  selector: 'page-carta',
  templateUrl: 'carta.html'
})
export class CartaPage {
  platos: Plato[] = [];

  constructor(public navCtrl: NavController, public platoData: PlatoData) { }

  ionViewDidLoad() {
    this.platos = this.platoData.getPlatos();
  }

}
