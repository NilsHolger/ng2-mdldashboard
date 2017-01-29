import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sensorfilter',
  templateUrl: './sensorfilter.component.html',
  styleUrls: ['./sensorfilter.component.css']
})
export class SensorfilterComponent implements OnInit {
  @Output() filterChanges: EventEmitter<string> = new EventEmitter();
  private selectedCategory: string;
  private categories: Array<string>;

  constructor() { }

  ngOnInit() {
    this.categories = [
      'temperature',
      'humidity',
      'switch'
    ];
  }
  categoryChanged(value) {
    this.selectedCategory = value;
    this.filterChanges.emit(this.selectedCategory);
  }

}
