import {Component, OnInit} from '@angular/core';

import {Person} from '../Shared/Models/person';
import {PersonService} from '../services/person.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-modify-person',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyPersonComponent implements OnInit{
  personForm1: FormGroup;
  person: Person | undefined;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {
    this.personForm1 = this.fb.group({
      id: ['', Validators.required], // ID is required
      firstName: ['', Validators.required], // First name is required
      lastName: ['', Validators.required], // Last name is required
      age: ['', [Validators.required, Validators.min(1)]], // Age is required and must be positive
      email: ['', [Validators.required, Validators.email]], // Email is required and must be valid
      isAdmin: [false] // Optional field, default is false
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.personService.getPersonById(+id).subscribe(person => {
        if(person) {
          this.person = person;

          this.personForm1.patchValue(person);
        }
      });
    }
  }

  onSubmit(): void {
    const person: Person = this.personForm1.value;

    // Check if we're updating an existing person
    if (person.id) {
      this.personService.updatePerson(person);
    } else {
      // For adding a new person, generate a new ID
      const newId = this.personService.generateNewId(); // This method will create a new ID
      person.id = newId;
      this.personService.addPerson(person);
    }

    this.router.navigate(['/persons']);
  }

  onDelete(): void {
    const id = this.personForm1.get('id')?.value;
    if (id) {
      this.personService.deletePerson(id);
      this.router.navigate(['/persons']);
    }
  }

  navigateTopersonList(): void {
    this.router.navigate(['/persons']);
  }
}
