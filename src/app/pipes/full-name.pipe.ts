import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
  constructor() {
    console.log("Custom Pipe Initialized - Version 2.0");
  }

  transform(value: { firstName: string; lastName: string }): string {
    if (!value || !value.firstName || !value.lastName) return 'Unknown Name';

    return `${value.firstName} ${value.lastName}`;
  }
}
