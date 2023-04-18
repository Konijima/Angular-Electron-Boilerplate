import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-frontend';

  constructor() {
    // A simple test to see if the Test object is available
    console.log(window.Test);
    console.log(window.Test.hello());
    console.log(window.Test.world());
  }
}
