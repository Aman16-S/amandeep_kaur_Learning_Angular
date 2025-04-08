import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipePipe implements PipeTransform {

  transform(value: number | string | null, currency: string = 'USD', locale: string = 'en-US'): string {
    if (value === null || value === undefined) return '';

    let numericValue = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(numericValue)) return 'Invalid Amount';

    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(numericValue);
  }

}
