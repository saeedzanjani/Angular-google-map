import {Component, OnInit} from '@angular/core';
import {IDelivery} from "../../../DTOs/Interfaces/IDelivery";
import {DeliveryService} from "../../../services/delivery.service";

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  vehicle: string[] = []
  selectedVehicle: string = 'Car'

  customers: IDelivery[] = [];
  drivers: IDelivery[] = []
  arrived: string[] = []

  constructor(private deliver: DeliveryService) { }

  ngOnInit(): void {
    this.vehicle = this.deliver.getVehicle()
  }
}
