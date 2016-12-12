import { Component } from "@angular/core";
import { ViewController, NavParams, ToastController } from "ionic-angular";
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

    constructor(public viewCtrl: ViewController, private navParams: NavParams, private toastCtrl: ToastController) {
        this.mesa = navParams.get("mesa");
        this.fechaReserva = navParams.get("fechaReserva").substring(0, 10);
        this.horaReserva = navParams.get("fechaReserva").substring(11, 19);
        this.estaEnExterior = navParams.get("mesaEnExterior");
    }

    reservar() {
        this.toastCtrl
            .create({
                message: "Mesa reservada",
                duration: 3000
            })
            .present();
        this.cerrarModal();
    }

    cerrarModal() {
        this.viewCtrl.dismiss();
    }
}