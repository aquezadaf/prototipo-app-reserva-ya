import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

import { Plato } from "../models/plato";

@Injectable()
export class PlatoData {
  private platos: Plato[] = [];

  constructor() {
    this.platos = [
      new Plato("Lomo Saltado", 5800),
      new Plato("Maki Ahuancainado", 3800),
      new Plato("Aji de Gallina", 4500),
      new Plato("Ceviche Pescado", 4300),
      new Plato("Papa a la Huancaina", 5200),
      new Plato("Anticuchos corazon Res", 6000),
      new Plato("Suspiro Limeño", 1500),
      new Plato("Pisco Sour", 1800),
      new Plato("Ensalada Primavera", 2300),
      new Plato("Carapulcra", 3900)
    ];
  }

  getPlatos(): Plato[] {
    return this.platos;
  }
}
