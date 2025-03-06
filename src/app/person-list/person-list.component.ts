import {Component, OnInit} from '@angular/core';
import {Person} from '../Shared/Models/person';
import {NgForOf} from "@angular/common";
import {PersonService} from '../services/person.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-Person-list1',
  standalone: true,
  imports: [
    NgForOf,
  ],
  templateUrl: './Person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export class PersonListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'isAdmin'];
  PersonList: Person[] = [];

  constructor(private personService: PersonService, private router: Router) {
  }

  ngOnInit() {
    this.personService.getPersons().subscribe({
      next: (data: Person[]) => this.PersonList = data,
      error: err => console.error("Error fetching Persons", err),
      complete: () => console.log("Person data fetch complete!")
    });
  }

  selectedPerson?: Person;
  selectPerson(person: Person): void {
    this.selectedPerson = person;
  }

  editPerson(id: number) {
    this.router.navigate(['/persons', id]);
  }

  deletePerson(id: number) {
    this.personService.deletePerson(id);
    this.PersonList = this.PersonList.filter(person => person.id !== id);
  }
}
