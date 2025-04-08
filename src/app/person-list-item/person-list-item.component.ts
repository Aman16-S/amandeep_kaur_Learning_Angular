import {Component, Input} from '@angular/core';
import {Person} from '../Shared/Models/person';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-person-list-item',
  imports: [
    NgIf
  ],
  templateUrl: './person-list-item.component.html',
  styleUrl: './person-list-item.component.css'
})
export class PersonListItemComponent {


  @Input() person?: Person;

}
