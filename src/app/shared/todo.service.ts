import { Todo } from './todo';

export class TodoService {

    todos: Todo[] = [new Todo('Create todo list'), new Todo('Play Dota 2', true)]

    constructor() {
        if (localStorage.getItem('todos') != null) {
            this.todos = JSON.parse(localStorage.getItem('todos'));
        }
    }

    getTodos(): Todo[] {
        return this.todos;
    }

    createTodo(title: string) {
        if (title.length > 0) {
            let todo: Todo = new Todo(title);
            this.todos.push(todo);
            this.saveChange();
        }
    }

    deleteTodo(todo: Todo) {
        let i = this.todos.indexOf(todo)
        if (i > -1) {
            this.todos.splice(i, 1);
            this.saveChange();
        }
    }

    toggleTodo(todo: Todo) {
        todo.completed = !todo.completed;
        this.saveChange();
    }

    saveChange(){
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

}