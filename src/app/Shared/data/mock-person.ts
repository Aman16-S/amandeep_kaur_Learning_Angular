import { Person } from '../Models/person';

export const MOCK_PERSONS: Person[] = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 28, email: 'john@example.com', dateOfBirth: new Date('1997-05-20'), salary: 50000 },
  { id: 2, firstName: 'Jane', lastName: 'Smith', age: 34, email: 'jane@example.com', dateOfBirth: new Date('1991-08-14'), salary: 60000 },
  { id: 3, firstName: 'Sam', lastName: 'Brown', age: 22, email: 'sam@example.com', dateOfBirth: new Date('2003-03-10'), salary: 45000 }
];
