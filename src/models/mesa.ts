export class Mesa {
    constructor(
        public id: number,
        public cantidadAsientos: number,
        public reservada: boolean,
        public fumadores: boolean,
        public conNiños: boolean
    ) { }
}