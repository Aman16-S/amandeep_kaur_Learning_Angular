
import {Component, OnInit} from '@angular/core';
import {Person} from '../Shared/Models/person';
import {NgForOf} from "@angular/common";
import {PersonService} from '../services/person.service';
import {PersonListItemComponent} from '../person-list-item/person-list-item.component';

@Component({
  selector: 'app-Person-list',
  standalone: true,
  imports: [
    NgForOf,
    PersonListItemComponent
  ],
  templateUrl: './Person-list.component.html',
  styleUrl: './Person-list.component.scss'
})
export class PersonListComponent implements OnInit {
  //Placeholder values for the table
  displayedColumns:string[]= ['id', 'firstName', 'lastName', 'age', 'isAdmin'];
  PersonList: Person[] = [];

  constructor (private PersonService: PersonService){
    //this constructor is primarily used for dependency injection
  }


  ngOnInit(){
    //This lifecycle hook is a good place to fetch and init our data
    this.PersonService.getPersons().subscribe({
      next: (data: Person[]) => this.PersonList = data,
      error:err => console.error("Error fetching Persons", err),
      complete:() => console.log("Person data fetch complete!")
    })

  }
  selectedPerson?: Person;
  selectPerson(Person: Person): void {
    this.selectedPerson = Person;
  }

}
