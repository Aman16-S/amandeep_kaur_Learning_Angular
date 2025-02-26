import { Person } from './person';  // Import the Person interface
import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink

  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Person Management System';  // Your title property
}
