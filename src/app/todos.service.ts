import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay} from 'rxjs/operators';

export interface Todo {
    completed: boolean;
    title: string;
    id?: number;
}

@Injectable({
    providedIn: 'root'
})
export class TodosService {

    constructor(private http: HttpClient) {
    }

    addTodo(todo: Todo): Observable<Todo> {
        const headers = new HttpHeaders({
            'My-Custom-Header': Math.random().toString()
        });
        return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
            headers
        });
    }

    fetchTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
            .pipe(delay(1500),
                catchError(err => {
                    return throwError(err);
                })
                );
    }

    removeTodo(id: number): Observable<void> {
        return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
    }

    completeTodo(id: number): Observable<Todo> {
        return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            completed: true
        });
    }
}
