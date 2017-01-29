import { Pipe, PipeTransform } from '@angular/core';

import { Sensor } from './sensor.service';


@Pipe({
  name: 'filterSensor'
})
export class FilterSensor implements PipeTransform {
  transform(value, category){
    if (value !== undefined){
    return value.filter((entry: Sensor) => {
      if (category && category !== ''){
        return entry.type === category;
      } else {
        return true;
      }
    });
  }
  }
}
