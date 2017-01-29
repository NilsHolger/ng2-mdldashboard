import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-sensorlist',
  templateUrl: './sensorlist.component.html',
  styleUrls: ['./sensorlist.component.css']
})
export class SensorlistComponent {
@Input() sensors;


}
