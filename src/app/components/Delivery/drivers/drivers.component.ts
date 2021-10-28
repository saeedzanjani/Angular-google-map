import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {DeliveryService} from "../../../services/delivery.service";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  vehicle: string[] = []
  selectedVehicle = 'Car'

  @Output() selected = new EventEmitter<string>()
  @Output() veh = new EventEmitter<string[]>()

  constructor(
    private delivery: DeliveryService
  ) {
  }

  changed(e: any) {
    this.selected.emit(e.target.value)
  }

  ngOnInit(): void {
    this.vehicle = this.delivery.getVehicle()
    this.veh.emit(this.vehicle)
    this.selected.emit(this.selectedVehicle)
  }

}
