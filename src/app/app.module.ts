import { NgModule, ErrorHandler } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";

import { MyApp } from "./app.component";

import { TabsPage } from "../pages/tabs/tabs";
import { LoginPage } from "../pages/login/login";
import { CartaPage } from "../pages/carta/carta";
import { DetalleCartaPage } from "../pages/detalle-carta/detalle-carta";

import { PlatoData } from "../providers/plato-data";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    CartaPage,
    DetalleCartaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    CartaPage,
    DetalleCartaPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, PlatoData]
})
export class AppModule {}
