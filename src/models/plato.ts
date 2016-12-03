export class Plato {
    private rutaImagenes: string = "assets/img/platos/";
    private extensionFoto: string = ".jpg";

    constructor(public nombre: string, public precio: number) { }

    get rutaFoto(): string {
        return this.rutaImagenes +
            this.nombre.toLowerCase().replace(/\s/g, "-") +
            this.extensionFoto;
    }

    get descripcion(): string {
        return "El lomo saltado es un plato típico de la gastronomía del Perú cuyos registros datan de fines del siglo XIX, donde se le conocía como «lomito de vaca», «lomito saltado» o «lomito a la chorrillana».1" +
            "El plato tal como se definió en aquella época y se le conoce actualmente surge por la influencia de los chinos-cantoneses, contiene la sazón y la mezcla de la cocina criolla peruana con la oriental. La influencia oriental se demuestra por el uso de la técnica de cocción en sartén," + "ahora conocida como «lomo saltado».2 Hay variantes introducidas en este plato, porque dependiendo del gusto, se han reemplazado unos ingredientes por otros. Este plato es uno de los más consumidos popularmente en el Perú.3";
    }

    get ingredientes(): string[] {
        return [
            "Carne de res",
            "sal",
            "pimienta",
            "comino",
            "cebolla",
            "ajo",
            "ají verde",
            "vinagre tinto o blanco",
            "tomate",
            "perejil",
            "papas",
            "aceite"
        ]
    }
}