import {Injectable} from '@angular/core';
import {IDelivery} from "../DTOs/Interfaces/IDelivery";

@Injectable({
  providedIn: 'root'
})

export class DeliveryService {

  constructor() {
  }

  getCustomers():IDelivery[] {
    return [
      {
        lat: 59.36563216683328,
        lng: 17.993926676948586,
        draggable: true,
        label: 'Package 1 address',
      },
      {
        lat: 59.33395275546248,
        lng: 18.010749491889992,
        draggable: true,
        label: 'Package 2 address',
      },
      {
        lat: 59.35548397144885,
        lng: 18.09967008515171,
        draggable: true,
        label: 'Package 3 address',
      },
      {
        lat: 59.33605396288916,
        lng: 18.136748942573586,
        draggable: true,
        label: 'Package 4 address',
      },
      {
        lat: 59.37245424726223,
        lng: 18.14086881562046,
        draggable: true,
        label: 'Package 5 address',
      },
    ];
  }

  getDrivers():IDelivery[] {
    return [
      {
        lat: 59.34970864367171,
        lng: 18.147735270698586,
        label: 'delivery address 8',
        draggable: true
      },
      {
        lat: 59.35653392548991,
        lng: 17.996673258979836,
        label: 'delivery address 2',
        draggable: true
      },
      {
        lat: 59.33482827435076,
        lng: 18.114089640815774,
        label: 'delivery address 10',
        draggable: true
      },
      {
        lat: 59.33395275546248,
        lng: 18.02654233856968,
        label: 'delivery address 4',
        draggable: true
      },
      {
        lat: 59.34445749306899,
        lng: 18.061904582222024,
        label: 'delivery address 5',
        draggable: true
      },
    ]

  }

  getVehicle():string[] {
    return ['Car', 'Bicycle']
  }
}
