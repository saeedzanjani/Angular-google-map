import {Component, ViewChild, OnInit, ElementRef, NgZone, AfterViewInit} from '@angular/core';
// import {ICustomer} from "./DTOs/Interfaces/IDelivery";
// import {IDriver} from "./DTOs/Interfaces/IDriver";
import {DeliveryService} from "./services/delivery.service";
import {MapsAPILoader} from "@agm/core";
import {IDelivery} from "./DTOs/Interfaces/IDelivery";

// declare module 'googlemaps'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

ngOnInit() {
}
}

