import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {
  transform(value: Date | string | null, format: string = 'MM/dd/yyyy'): string {
    if (!value) return '';

    let date = new Date(value);
    if (isNaN(date.getTime())) return 'Invalid Date';

    return this.formatDate(date, format);
  }

  private formatDate(date: Date, format: string): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return format
      .replace('dd', day)
      .replace('MM', month)
      .replace('yyyy', String(year))
      .replace('yy', String(year).slice(-2));
  }
}
