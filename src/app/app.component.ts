import { Person } from './person.interface';  // Import the Person interface
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'AmandeepKaurLearningAngular';  // Your title property

  // Initialize the 'people' array with 6 instances of the 'Person' interface
  people: Person[] = [
    { name: 'Aman', age: 25, email: 'aaaa@example.com', phoneNumber: '123-0000000' },
    { name: 'Raman', age: 28, email: 'dss@example.com', phoneNumber: '123-1111111' },
    { name: 'Sara', age: 30, email: 'sara@example.com', phoneNumber: '123-2222222' },
    { name: 'kamal', age: 32, email: 'tfve@example.com', phoneNumber: '123-3333333' },
    { name: 'zzz', age: 22, email: 'zzz@example.com', phoneNumber: '123-4444444' },
    { name: 'Mike', age: 27, email: 'mike@example.com', phoneNumber: '123-5555555' }
  ];
}
