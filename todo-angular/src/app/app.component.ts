import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [{id: 12, text: 'Pain'}, {id: 13, text: 'Lait'}, {id: 2, text: 'Beurre'}];

  handleTodoAdd(todo) {
    // ajout dans un tableau muable
    // this.todos.push(todo);

    // ajout dans un tableau immuable
    this.todos = [...this.todos, todo];
  }
}
