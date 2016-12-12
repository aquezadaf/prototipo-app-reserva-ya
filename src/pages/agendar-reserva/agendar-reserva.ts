import { Component } from "@angular/core";
import { ViewController } from "ionic-angular";

@Component({
    selector: "page-agendar-reserva",
    templateUrl: "agendar-reserva.html"
})
export class AgendarReservaPage {
    constructor(public viewCtrl: ViewController) { }

    cerrarModal() {
        this.viewCtrl.dismiss();
    }
}