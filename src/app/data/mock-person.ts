import { Person } from '../Shared/Models/person';

export const MOCK_PERSONS: Person[] = [
  { id: 1, firstName: "John", lastName: "Smith", age: 28, email: "john.smith@example.com", isAdmin: false },
  { id: 2, firstName: "Sara", lastName: "Lee", age: 35, email: "sara.lee@example.com", isAdmin: true },
  { id: 3, firstName: "Michael", lastName: "Johnson", age: 40, email: "michael.johnson@example.com", isAdmin: false },
  { id: 4, firstName: "Emma", lastName: "Brown", age: 22, email: "emma.brown@example.com", isAdmin: true }
];
