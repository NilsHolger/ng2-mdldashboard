import { Component, OnInit } from '@angular/core';
import { Sensor, SensorService } from '../sensor.service';


@Component({
  selector: 'app-sensorconfigure',
  templateUrl: './sensorconfigure.component.html',
  styleUrls: ['./sensorconfigure.component.css']
})
export class SensorconfigureComponent implements OnInit {
  private sensors: Sensor[];

  constructor(private sensorService: SensorService) {}

  ngOnInit() {}

  refreshSensors(){
    this.sensorService.discoverSensors()
                      .subscribe(data => this.sensors = data);
  }

}
