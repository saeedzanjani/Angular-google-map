import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AgmCoreModule} from "@agm/core";
import {FormsModule} from "@angular/forms";
import {DeliveryService} from "./services/delivery.service";
import { DeliveryComponent } from './components/Delivery/delivery/delivery.component';
import { DriversComponent } from './components/Delivery/drivers/drivers.component';
import { CustomersComponent } from './components/Delivery/customers/customers.component';
import { MapComponent } from './components/Delivery/map/map.component';
import { ArrivedComponent } from './components/Delivery/arrived/arrived.component';

@NgModule({
  declarations: [
    AppComponent,
    DeliveryComponent,
    DriversComponent,
    CustomersComponent,
    MapComponent,
    ArrivedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCGNt86C_wtsPqlY1XNYgKC6908BU0Yt20",
      libraries: ['places']
    }),
  ],
  providers: [DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
