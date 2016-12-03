import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { Plato } from "../../models/plato";

@Component({
    selector: "detalle-carta",
    templateUrl: "detalle-carta.html"
})
export class DetalleCartaPage {
    plato: Plato;

    constructor(public navCtrl: NavController, private navParams: NavParams) { 
        this.plato = navParams.data;
    }

    ionViewDidLoad() {
        console.log(this.plato);
    }
}
