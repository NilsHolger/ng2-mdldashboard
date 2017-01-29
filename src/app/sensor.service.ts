import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

export class Sensor {
  name: string;
  description: string;
}

@Injectable()
export class SensorService {

  constructor(private http: Http){ }
  
  discoverSensors(){
    return this.http.get('/assets/data/newsensors.json')
                    .map(response => response.json());
  }
}
