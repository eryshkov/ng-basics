import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  posts: Post[] = [
    // {title: 'Хочу выучить Anglar компоненты',
    //   text: 'Все еще учу компоненты',
    //   id: 1
    // },
    {title: 'Следующий блок',
      text: 'будет про диррективы и пайпы',
      id: 2
    }
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
    console.log('Post=', post);
  }

  removePost(id: number) {
    console.log('Remove id=', id);
    this.posts = this.posts.filter((post) => {
      return post.id !== id;
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout');
      this.posts[0] = {
        title: 'Changed',
        text: ''
      };
    }, 5000);
  }
}
