import { Component } from '@angular/core';
import {MOCK_PERSONS} from './Shared/data/mock-person';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';  // Import the Person interface

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Person Management System';  // Your title property

  // Sample data of people
   people = MOCK_PERSONS
}
