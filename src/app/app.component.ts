import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title';
  number = 42;
  arr = [1, 2, 3];

  obj = { a: 1, b: {c: 2}};
  // img = 'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png';

  inputValue: '';

  constructor() {
    // setTimeout(
    //   () => {
    //     console.log('Timeout is over');
    //     this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png';
    //   },
    //   5000
    // );
  }

  onInput(event?) {
    console.log('Event: ', event);
  }
}
