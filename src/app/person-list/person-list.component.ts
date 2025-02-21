
import {Component, OnInit} from '@angular/core';
import {Person} from '../Shared/Models/person';
import {NgForOf} from "@angular/common";
import {PersonService} from '../services/person.service';
import {PersonListItemComponent} from '../person-list-item/person-list-item.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-Person-list1',
  standalone: true,
  imports: [
    NgForOf,
    PersonListItemComponent,
    RouterLink
  ],
  templateUrl: './Person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export class PersonListComponent implements OnInit {
  //Placeholder values for the table
  displayedColumns:string[]= ['id', 'firstName', 'lastName', 'age', 'isAdmin'];
  PersonList: Person[] = [];

  constructor (private personService: PersonService){
    //this constructor is primarily used for dependency injection
  }


  ngOnInit(){
    //This lifecycle hook is a good place to fetch and init our data
    this.personService.getPersons().subscribe({
      next: (data: Person[]) => this.PersonList = data,
      error:err => console.error("Error fetching Persons", err),
      complete:() => console.log("Person data fetch complete!")
    })

  }
  selectedPerson?: Person;
  selectPerson(person: Person): void {
    this.selectedPerson = person
  }

}
