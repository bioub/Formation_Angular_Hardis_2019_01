import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class DropdownComponent implements OnInit {

  @Input() items = []; 
  @Input() selected = '';
  @Output() selectedChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  
  selectItem(item) {
    this.selected = item;
    this.selectedChange.emit(item);
  }
}
