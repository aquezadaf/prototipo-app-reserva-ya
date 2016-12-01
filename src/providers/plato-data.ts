import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PlatoData {
  private platos = [];

  constructor() {
    for (var i = 0; i < 10; i++) {
      this.platos.push({
        nombre: "Lomo Saltado",
        precio: "$ 5.500",
        foto: "assets/img/platos/lomo-saltado.jpg"
      });
    }
  }

  getPlatos() {
    return this.platos;
  }

}
