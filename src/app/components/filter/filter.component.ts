import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Options } from 'ng5-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() selectedPriceRange: EventEmitter<any> = new EventEmitter<any>();

  public showPopup = false;
  public minValue: number = 100;
  public maxValue: number = 10000;
  public options: Options = {
            floor: 100,
            ceil: 10000,
            animate: false,
            showSelectionBar: true
        };

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    
  }

  applyFilter(){
    this.selectedPriceRange.emit([this.minValue, this.maxValue]);
    this.showPopup = false;
  }

  resetFilter(){
    this.minValue = 100;
    this.maxValue = 10000;
    this.selectedPriceRange.emit([100, 10000]);
    this.showPopup = false;
  }

  showFilterPopup(){
    this.showPopup = true;
  }

  cancelPopup(){
    this.showPopup = false;
  }

}
