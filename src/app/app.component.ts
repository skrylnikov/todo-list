import { Component } from '@angular/core';

import { Todo} from './shared/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos:Todo[] = [ new Todo('Create todo list'), new Todo('Play Dota 2',true)]

  add(title:string){
    let todo:Todo =new Todo(title);
    this.todos.push(todo);
  }



}
