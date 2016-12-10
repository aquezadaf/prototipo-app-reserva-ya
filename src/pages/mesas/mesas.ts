import { Component } from "@angular/core";

import { NavController } from "ionic-angular";

@Component({
    selector: "page-mesas",
    templateUrl: "mesas.html"
})
export class MesasPage {
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