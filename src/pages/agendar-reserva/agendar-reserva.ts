import { Component } from "@angular/core";
import { ViewController, NavParams } from "ionic-angular";
import { Mesa } from "../../models/mesa";

@Component({
    selector: "page-agendar-reserva",
    templateUrl: "agendar-reserva.html"
})
export class AgendarReservaPage {
    public mesa: Mesa;
    public fechaReserva: string;
    public estaEnExterior: boolean;

    constructor(public viewCtrl: ViewController, private navParams: NavParams) { 
        this.mesa = navParams.get("mesa");
        this.fechaReserva = navParams.get("fechaReserva");
        this.estaEnExterior = navParams.get("mesaEnExterior");
    }

    cerrarModal() {
        this.viewCtrl.dismiss();
    }
}