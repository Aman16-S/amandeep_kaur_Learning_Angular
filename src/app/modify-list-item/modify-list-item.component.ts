import {Component, OnInit} from '@angular/core';
import {Person} from '../Shared/Models/person';
import {PersonService} from '../services/person.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-modify-person',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyPersonComponent implements OnInit {
  personForm1: FormGroup;
  person: Person | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {
    this.personForm1 = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      isAdmin: [false]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.personService.getPersons().subscribe(persons => {
        const foundPerson = persons.find(p => p.id === +id);
        if (foundPerson) {
          this.person = foundPerson;
          this.personForm1.patchValue(foundPerson);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.personForm1.valid) {
      const person: Person = this.personForm1.value;
      if (this.person) {
        this.personService.updatePerson(person);
      } else {
        person.id = this.personService.generateNewId();

        this.personService.addPerson(person);
      }
      this.router.navigate(['/persons']);
    }
  }

  // onDelete(): void {
  //   const id = this.personForm1.get('id')?.value;
  //   if (id) {
  //     this.personService.deletePerson(id).subscribe(() => this.router.navigate(['/persons']));
  //   }
  // }

  navigateTopersonList(): void {
    this.router.navigate(['/persons']);
  }
}
