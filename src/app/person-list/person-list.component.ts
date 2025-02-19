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
  personList: Person[] = [];

  selectedPerson?: Person;

  selectPerson(person: Person): void {
    this.selectedPerson = person;
  }
}
