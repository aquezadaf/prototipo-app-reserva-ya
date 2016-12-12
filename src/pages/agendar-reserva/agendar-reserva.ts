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
    public horaReserva: string;
    public estaEnExterior: boolean;

    constructor(public viewCtrl: ViewController, private navParams: NavParams) { 
        this.mesa = navParams.get("mesa");
        this.fechaReserva = navParams.get("fechaReserva").substring(0, 10);
        this.horaReserva = navParams.get("fechaReserva").substring(11, 19);
        this.estaEnExterior = navParams.get("mesaEnExterior");
    }

    cerrarModal() {
        this.viewCtrl.dismiss();
    }

    reservar() {
        this.cerrarModal();
    }
}