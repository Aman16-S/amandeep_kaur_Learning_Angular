import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_PERSONS} from '../data/mock-person';

class person {
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private contentArray = MOCK_PERSONS;

  constructor() {}

  // Method to return an Observable of IContent array
}
