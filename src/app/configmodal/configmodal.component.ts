import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { Sensor } from '../sensor.service';

@Component({
  selector: 'app-configmodal',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './configmodal.component.html',
  styleUrls: ['./configmodal.component.css']
})
export class ConfigmodalComponent implements OnInit {
  @Output() confirm: EventEmitter<any> = new EventEmitter();
  sensorModel: Sensor = {name: '', description: '', type: ''};
  private isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  open(sensor: Sensor) {
    this.sensorModel = {
      name: sensor.name,
      description: sensor.description,
      type: sensor.type
    }
    this.isOpen = true;

  }

  ok() {
    this.isOpen = false;
    this.confirm.emit(null);
  }

  cancel() {
    this.isOpen = false;
  }

}
