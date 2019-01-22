import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() todo = new Todo();

  constructor() { }

  ngOnInit() {
  }

}
