import { Component } from "@angular/core";

import { NavController } from "ionic-angular";

@Component({
    selector: "mesas",
    templateUrl: "mesas.html"
})
export class MesasPage {
    // TODO: Considerar agregar la opcion para filtrar mesas para fumadores y otras cosas

    constructor(public navController: NavController) {}
}