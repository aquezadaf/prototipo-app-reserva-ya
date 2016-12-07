import { Component } from "@angular/core";

import { NavController } from "ionic-angular";

@Component({
    selector: "mesas",
    templateUrl: "mesas.html"
})
export class MesasPage {
    // TODO: Considerar agregar la opcion para filtrar mesas para fumadores y otras cosas
    fechaReserva: string;
    filtrosMesas: string[];

    constructor(public navController: NavController) {
        this.fechaReserva = new Date().toISOString();
        this.generarFiltros();
    }

    private generarFiltros() {
        this.filtrosMesas = [
            "Fumadores",
            "Aire libre",
            "Sin niños"
        ];
    }
}