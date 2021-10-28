import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DeliveryService} from "../../../services/delivery.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat = 59.331418;
  lng = 18.070007;

  myCustomers: any = []
  myDrivers: any = []

  public companyIcon = '../assets/pin-location-4355.png';
  public carIcon = '../assets/car-1057.png';
  public bicycleIcon = '../assets/bicycle-1054.png';

  zoom: number = 12;
  arrived: string[] = []
  arrivedPackage: string = ''
  startIndex: number = 0

  // Inputs
  @Input() selectedVehicle: any
  @Input() vehicle: any

  // Outputs
  @Output() customers = new EventEmitter<any>()
  @Output() drivers = new EventEmitter<any>()
  @Output() myArrived = new EventEmitter<string[]>()


  constructor(
    private delivery: DeliveryService
  ) {
  }

  mapClicked(e: any) {
    this.myCustomers.push({
      lat: e.coords.lat,
      lng: e.coords.lng,
      label: 'delivery address',
      draggable: true
    });
  }

  clickedMarker(lat: any, i: any) {
    let filtered = this.myCustomers.filter((item: any, index: any) => item.lat !== lat)
    this.customers = filtered
  }


  // Drag and Drop Events Handler Start
  customerDragStart(e: any) {
    let allCustomer = [...this.myCustomers]
    let customerIndex: any = allCustomer.findIndex((item) => item.lat == e.coords.lat)

    this.startIndex = customerIndex
  }

  driverDragStart(e: any) {
    let allDriver = [...this.myDrivers]
    let driverIndex: any = allDriver.findIndex((item) => item.lat == e.coords.lat)

    this.startIndex = driverIndex
  }


  customerDragEnd(e: any) {
    let allCustomers = [...this.myCustomers]
    allCustomers[this.startIndex].lat = e.coords.lat
    allCustomers[this.startIndex].lng = e.coords.lng

    this.myCustomers = allCustomers
  }


  driverDragEnd(e: any) {
    let allDrivers: any = [...this.myDrivers]

    allDrivers[this.startIndex].lat = e.coords.lat
    allDrivers[this.startIndex].lng = e.coords.lng

    let arrivedItem: any = this.myCustomers.find((item: any) =>
      item.lat.toFixed(2) === this.myDrivers[this.startIndex].lat.toFixed(2)
      && item.lng.toFixed(2) === this.myDrivers[this.startIndex].lng.toFixed(2))

    if (arrivedItem && arrivedItem.label !== 'Package Arrived') {
      this.arrivedPackage = arrivedItem.label
      this.arrived.push(this.arrivedPackage)

      arrivedItem.label = 'Package Arrived'
    } else {
      return
    }
    this.drivers = allDrivers
  }
  // Drag and Drop Events Handler End


  ngOnInit(): void {
    this.myCustomers = this.delivery.getCustomers()
    this.myDrivers = this.delivery.getDrivers()

    this.customers.emit(this.myCustomers)
    this.drivers.emit(this.myDrivers)
    this.myArrived.emit(this.arrived)
  }

}
