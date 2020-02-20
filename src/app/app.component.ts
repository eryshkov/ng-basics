import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  e: number = Math.E;
  str = 'hello world';
  date = new Date();
  search = '';
  searchField = 'title';

  posts: Post[] = [
    {title: 'Title 1', text: 'Post 1 text'},
    {title: 'Title 2', text: 'Post 2 text'},
    {title: 'Title 3', text: 'Post 3 text'},
    {title: 'Title 4', text: 'Post 4 text'},
  ];

  addPost() {
      this.posts.unshift({
          title: 'Angular 9',
          text: 'Evgenii Angular 9 course'
      });
  }
}
