import { Component } from "@angular/core";
import { NavController, LoadingController } from "ionic-angular";
import { InAppBrowser } from "ionic-native";
import { Reserva } from "../../models/reserva";
import { ReservaData } from "../../providers/reserva-data";

@Component({
    selector: "page-login",
    templateUrl: "login.html"
})
export class LoginPage {
    private urlOauth = {
        facebook: "https://m.facebook.com/",
        instagram: "https://www.instagram.com/accounts/login/?hl=es",
        twitter: "https://mobile.twitter.com/session/new",
        googlePlus: "https://accounts.google.com/ServiceLogin?passive=1209600&osid=1&continue=https://plus.google.com/collections/featured&followup=https://plus.google.com/collections/featured#identifier"
    };
    public usuarioLogeado: boolean;
    public reservas: Reserva[];

    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private reservaData: ReservaData) {
        this.usuarioLogeado = false;
        this.reservas = reservaData.getReservas();
    }

    iniciarSesion() {
        let cargando = this.loadingCtrl.create({
            content: "Cargando...",
            duration: 1000
        });
        cargando.onDidDismiss(() => {
            this.usuarioLogeado = true;
        });
        cargando.present();
    }

    abrirFacebook() {
        this.abrirNavegador(this.urlOauth.facebook);
    }

    abrirInstagram() {
        this.abrirNavegador(this.urlOauth.instagram);
    }

    abrirTwitter() {
        this.abrirNavegador(this.urlOauth.twitter);
    }

    abrirGooglePlus() {
        this.abrirNavegador(this.urlOauth.googlePlus);
    }

    private abrirNavegador(urlPagina) {
        new InAppBrowser(urlPagina, "_system");
    }

    detalleReserva(reserva: Reserva) {
        console.log("Abrir detalle reserva", reserva);
    }

    eliminarReserva(reserva: Reserva) {
        let indice = this.reservas.indexOf(reserva);
        this.reservas.splice(indice, 1); 
    }
}