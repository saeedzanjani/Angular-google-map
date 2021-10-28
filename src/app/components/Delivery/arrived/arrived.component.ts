import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-arrived',
  templateUrl: './arrived.component.html',
  styleUrls: ['./arrived.component.css']
})
export class ArrivedComponent implements OnInit {

  constructor() { }

  @Input() arrived:any

  ngOnInit(): void {
  }
}
