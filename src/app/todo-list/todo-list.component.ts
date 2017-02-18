import { Component, Input } from '@angular/core';

import { Todo } from '../shared/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() todos: Todo[];



  delete(todo: Todo) {
    let i = this.todos.indexOf(todo)

    this.todos.splice(i, 1);
  }


}