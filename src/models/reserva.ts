import { Mesa } from "./mesa";

export class Reserva {
    constructor(public fechaReserva: string, public horaReserva: string, public mesa: Mesa) { }
}