import { NgModule, ErrorHandler } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";

import { MyApp } from "./app.component";

import { TabsPage } from "../pages/tabs/tabs";
import { LoginPage } from "../pages/login/login"
import { CartaPage } from "../pages/carta/carta"

import { PlatoData } from "../providers/plato-data"

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    CartaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    CartaPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, PlatoData]
})
export class AppModule {}
