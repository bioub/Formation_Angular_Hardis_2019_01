import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn-counter',
  templateUrl: './btn-counter.component.html',
  styleUrls: ['./btn-counter.component.css']
})
export class BtnCounterComponent implements OnInit {

  @Input() value = 0;

  constructor() { }

  ngOnInit() {
   
  }

  increment() {
    this.value += 1;
  }

}
