import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  @Output() selectedSortOn: EventEmitter<any> = new EventEmitter<any>();

  public sortedOn:any;
  public showPopup = false;

  constructor() { }

  ngOnInit() {
  }

  sortOn(param){
    this.sortedOn = param;
    this.selectedSortOn.emit(param);
  }

  selectSortOn(param){
    this.sortedOn = param;
  }

  sortFromPopup(){
    this.selectedSortOn.emit(this.sortedOn);
    this.showPopup = false;
  }

  showSortOnPopup(){
    this.showPopup = true;
  }

  cancelPopup(){
    this.showPopup = false;
  }

}
