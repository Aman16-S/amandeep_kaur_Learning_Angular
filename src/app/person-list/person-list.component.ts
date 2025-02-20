
import {Component, OnInit} from '@angular/core';
import {Person} from '../Shared/Models/person';
import {NgForOf} from "@angular/common";
import {PersonService} from '../services/person.service';
import {PersonListItemComponent} from '../person-list-item/person-list-item.component';

@Component({
  selector: 'app-Person-list1',
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
    this.getPersonById(person.id); // Call getPersonById to fetch the selected person
    console.log("Selected person: ", person);
  }

  // Method to fetch a single person by ID using the service
  getPersonById(id: number): void {
    this.personService.getPersonById(id).subscribe({
      next: (person: Person | undefined) => {
        if (person) {  // Ensure person is not undefined
          this.selectedPerson = person;
          console.log("Fetched person: ", person);
        } else {
          console.error('Person not found');
          this.selectedPerson = undefined; // Optional, in case you want to reset the selected person
        }
      },
      error: (err) => console.error("Error fetching person by ID", err),
      complete: () => console.log("Fetch complete!")
    });
  }

  protected readonly personalbar = personalbar;
}
