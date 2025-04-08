export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  dateOfBirth: Date;  // New field for DatePipe
  salary: number;     // New field for CurrencyPipe
  isAdmin?: boolean;
}
