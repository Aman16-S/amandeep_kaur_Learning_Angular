import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCasePipe'
})
export class UpperCasePipePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value.toUpperCase();
  }


}
