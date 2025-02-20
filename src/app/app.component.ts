import { Person } from './person';  // Import the Person interface
import { Component } from '@angular/core';
import {PersonListComponent} from './person-list/person-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
  PersonListComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Person Management System';  // Your title property
}
