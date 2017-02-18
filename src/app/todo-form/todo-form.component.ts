import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'todo-form',
    templateUrl:'./todo-form.component.html',
    styleUrls:['./todo-form.component.css']
})
export class TodoFormComponent{
        title:string='';

        @Output() add = new EventEmitter();

        create(){
          this.add.emit(this.title);
        }
          /*add() {
              /*
    if (this.title.length > 0) {
      let todo :Todo = new Todo(this.title);
      this.todos.push(todo);
      this.title='';
    }
    
}*/
}