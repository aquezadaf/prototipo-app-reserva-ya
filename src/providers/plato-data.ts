import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Plato } from "../models/plato"

@Injectable()
export class PlatoData {
  private platos: Plato[] = [];

  constructor() {
    for (var i = 0; i < 10; i++) {
      let platosRestorant = [
        new Plato("Lomo Saltado", 5500)
      ];

      this.platos = this.platos.concat(platosRestorant);
    }
  }

  getPlatos(): Plato[] {
    return this.platos;
  }
}
