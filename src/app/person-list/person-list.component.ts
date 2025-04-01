import {Component, OnInit} from '@angular/core';
import {Person} from '../Shared/Models/person';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {PersonService} from '../services/person.service';
import {Router} from '@angular/router';
import {UpperCasePipePipe} from '../pipes/upper-case-pipe.pipe';
import {DatePipePipe} from '../pipes/date-pipe.pipe';
import {CurrencyPipePipe} from '../pipes/currency-pipe.pipe';
import {FullNamePipe} from '../pipes/full-name.pipe';
import {HoverHighlightDirective} from '../directives/hover-highlight.directive';

@Component({
  selector: 'app-Person-list1',
  standalone: true,
  imports: [
    NgForOf,
    UpperCasePipePipe,
    DatePipePipe,
    CurrencyPipePipe,
    FullNamePipe,
    HoverHighlightDirective,
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
