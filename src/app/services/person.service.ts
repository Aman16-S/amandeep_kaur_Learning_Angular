
import { Injectable } from '@angular/core';
//import our mock data
import {MOCK_PERSONS} from '../Shared/data/mock-person';
import { Observable, of } from 'rxjs';
import {Person} from '../Shared/Models/person';

//Notice the new Decorator
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private persons: Person[] = MOCK_PERSONS;//Local copy of person data for CRUD Operations
  constructor() { }
  //Returns all persons
  getPersons(): Observable<Person[]>{
    return of(MOCK_PERSONS); //Return and observable that emits mock Person data
  }
  //Adding basic CRUD methods
  //Create: Add Person
  addPerson(newPerson:Person) : Observable<Person[]>{
    this.persons.push(newPerson)
    return of(this.persons);
  }

  //Update an Existing Person
  updatePerson(updatedPerson: Person): Observable<Person[]> {
    const index = this.persons.findIndex(Person => Person.id === updatedPerson.id);
    if (index !== -1) {
      this.persons[index] = updatedPerson;
    }
    return of(this.persons);
  }
  //Delete: Remove a Person by ID
  deletePerson(PersonId: number): Observable<Person[]> {
    this.persons = this.persons.filter(Person => Person.id !== PersonId);
    return of(this.persons);
  }
  getPersonById(PersonId: number): Observable<Person | undefined> {
    const Person = this.persons.find(Person => Person.id === PersonId);
    return of(Person);
  }
}
