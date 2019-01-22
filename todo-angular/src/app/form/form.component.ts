import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  todo = new Todo();
  @Output() todoAdd = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  handleSubmit(event: Event) {
    // event.preventDefault();
    // const value = (<HTMLFormElement> event.currentTarget).querySelector('input').value;
    // TODO remonter la valeur saisie

    // Si vous travailler avec des Object (autre que string qui est immuable)
    // pensez à le cloner {...ancienObjet}
    this.todoAdd.emit({...this.todo, id: Math.floor(Math.random() * 10001)});
  }
}
