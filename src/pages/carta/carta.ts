import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { DetalleCartaPage } from "../detalle-carta/detalle-carta";
import { PlatoData } from "../../providers/plato-data";
import { Plato } from "../../models/plato";

@Component({
  selector: "page-carta",
  templateUrl: "carta.html"
})
export class CartaPage {
  platos: Plato[] = [];

  constructor(public navCtrl: NavController, public platoData: PlatoData) { }

  ionViewDidLoad() {
    this.platos = this.platoData.getPlatos();
  }

  buscarPlatos(evento: any) {
    let nombrePlato = evento.target.value;
    this.platos = this.platoData.buscarPlatos(nombrePlato);
  }

  verDetallePlato(plato: Plato) {
    this.navCtrl.push(DetalleCartaPage, plato);
  }
}
