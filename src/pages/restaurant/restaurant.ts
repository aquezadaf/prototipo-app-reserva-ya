import { Component } from "@angular/core";

import { NavController } from "ionic-angular";
import { InAppBrowser } from "ionic-native";

@Component({
    selector: "page-restaurant",
    templateUrl: "restaurant.html"
})
export class RestaurantPage {
    constructor(public navCtrl: NavController) { }

    abrirMapa() {
        let urlGoogleMaps = "https://www.google.cl/maps/place/Pardo's+Chicken/@-33.4184206,-70.6019252,15.67z/data=!4m5!3m4!1s0x0:0xfd38697b954cb275!8m2!3d-33.417065!4d-70.598408";
        console.log("Abrir mapa", urlGoogleMaps);
        new InAppBrowser(urlGoogleMaps, "_system");
    }
}