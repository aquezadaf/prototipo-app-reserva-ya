import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { InAppBrowser } from "ionic-native";

@Component({
    selector: "page-restaurant",
    templateUrl: "restaurant.html"
})
export class RestaurantPage {
    contactos = {
        direccion: "Av. Concha Y Toro 1149, Puente Alto",
        twitter: "reservayachile",
        correo: "reserva.ya.chile@gmail.com",
        telefono: "+569 1234 5678"
    };

    constructor(public navCtrl: NavController) { }

    abrirMapa() {
        let urlGoogleMaps = "https://www.google.cl/maps/place/Pardo's+Chicken/@-33.4184206,-70.6019252,15.67z/data=!4m5!3m4!1s0x0:0xfd38697b954cb275!8m2!3d-33.417065!4d-70.598408";
        this.abrirNavegador(urlGoogleMaps);
    }

    abrirTwitter() {
        let urlPerfilTwitter = "https://twitter.com/intent/tweet?text=@" + this.contactos.twitter;
        this.abrirNavegador(urlPerfilTwitter);
    }

    abrirCorreo() {
        let urlCorreo = "mailto:" + this.contactos.correo;
        this.abrirNavegador(urlCorreo);
    }

    abrirLlamada() {
        let urlLlamada = "tel:" + this.contactos.telefono;
        this.abrirNavegador(urlLlamada);
    }

    private abrirNavegador(urlSitio: string) {
        new InAppBrowser(urlSitio, "_system");
    }
}