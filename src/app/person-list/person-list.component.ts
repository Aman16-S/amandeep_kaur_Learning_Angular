import { Component } from '@angular/core';
import { Person} from '../Shared/Models/person';
import {NgClass, NgForOf} from "@angular/common";
import {PersonListItemComponent} from '../person-list-item/person-list-item.component';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [
    NgForOf,
    PersonListItemComponent,
    NgClass,

  ],
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
  // Placeholder values for the table
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'email', 'isAdmin'];
  personList: Person[] = [ // Sample data using the User interface
    { id: 1, firstName: "John", lastName: "Smith", age: 28, email: "john.smith@example.com", isAdmin: false },
    { id: 2, firstName: "Sara", lastName: "Lee", age: 35, email: "sara.lee@example.com", isAdmin: true },
    { id: 3, firstName: "Michael", lastName: "Johnson", age: 40, email: "michael.johnson@example.com", isAdmin: false },
    { id: 4, firstName: "Emma", lastName: "Brown", age: 22, email: "emma.brown@example.com", isAdmin: true }
  ];

  selectedPerson?: Person;

  selectPerson(person: Person): void {
    this.selectedPerson = person;
  }
}
