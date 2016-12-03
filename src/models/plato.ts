export class Plato {
    private rutaImagenes: string = "assets/img/platos/";
    private extensionFoto: string = ".jpg";

    constructor(public nombre: string, public precio: number) { }

    get rutaFoto(): string {
        return this.rutaImagenes + this.nombre.replace(" ", "-") + this.extensionFoto;
    }
}