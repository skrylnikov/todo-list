import { Component, } from '@angular/core';

import { TodoService } from '../shared/todo.service'

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  title: string = '';

  constructor(private todoService: TodoService) { }

  create() {
    this.todoService.createTodo(this.title);
    this.title = '';
  }
}
