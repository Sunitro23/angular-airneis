import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayBoolean',
})
export class DisplayBooleanPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? 'Yes' : 'No';
  }
}
