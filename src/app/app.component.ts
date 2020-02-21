import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {element} from 'protractor';
import {Todo, TodosService} from './todos.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    todos: Todo[] = [];
    todoTitle = '';
    loading = false;

    constructor(private todosService: TodosService) {
    }

    ngOnInit(): void {
        this.fetchTodos();
    }

    addTodo() {
        if (!this.todoTitle.trim()) {
            return;
        }

        const newTodo: Todo = {
            title: this.todoTitle,
            completed: false
        };

        this.todosService.addTodo(newTodo)
            .subscribe((todo) => {
            console.log('Response: ', todo);
            this.todos.unshift(todo);
            this.todoTitle = '';
        });
    }

    fetchTodos() {
        this.loading = true;
        this.todosService.fetchTodos()
            .subscribe((todos) => {
            console.log('Response: ', todos);
            this.todos = todos;
            this.loading = false;
        });
    }

    removeTodo(id: number) {
        this.todosService.removeTodo(id)
            .subscribe((response) => {
                this.todos = this.todos.filter(element => {
                    return element.id !== id;
                });
            });
    }
}
