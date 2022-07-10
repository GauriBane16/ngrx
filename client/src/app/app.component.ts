import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
}

// Dependency Injection Principle - Design Pattern
// Components are dependent on api service
// api service -> http service
// http service-> http Client