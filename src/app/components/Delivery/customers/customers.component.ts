import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() {
  }

  @Input() customers: any

  ngOnInit(): void {
  }

}
