import { NgModule, ErrorHandler } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { TabsPage } from "../pages/tabs/tabs";
import { LoginPage } from "../pages/login/login";
import { CartaPage } from "../pages/carta/carta";
import { DetalleCartaPage } from "../pages/detalle-carta/detalle-carta";
import { ReservaPage } from "../pages/reserva/reserva";
import { AgendarReservaPage } from "../pages/agendar-reserva/agendar-reserva";
import { RestaurantPage } from "../pages/restaurant/restaurant";
import { PlatoData } from "../providers/plato-data";
import { RestaurantData } from "../providers/restaurant-data";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    CartaPage,
    DetalleCartaPage,
    ReservaPage,
    AgendarReservaPage,
    RestaurantPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    CartaPage,
    DetalleCartaPage,
    ReservaPage,
    AgendarReservaPage,
    RestaurantPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    PlatoData,
    RestaurantData
  ]
})
export class AppModule { }
