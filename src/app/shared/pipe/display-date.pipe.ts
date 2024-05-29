import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayDate',
})
export class DisplayDatePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const date: any = new Date(value);
    const startDate: any = new Date(date.getFullYear(), 0, 1);
    var days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
    return (
      'S' +
      Math.ceil(days / 7) +
      '-T' +
      Math.ceil((date.getMonth() + 1) / 4) +
      '-' +
      date.getFullYear()
    );
  }
}
