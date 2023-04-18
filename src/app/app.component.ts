import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-frontend';

  constructor() {
    // Verify that the API object is available in the global window object
    console.log(window.Test, window.Test.hello(), window.Test.world());
  }
}
