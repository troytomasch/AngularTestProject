import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backwards',
  standalone: true,
})
export class BackwardsPipe implements PipeTransform {
  transform(value: string | undefined): string {
    let newString = '';
    if (!value) {
      return newString;
    }
    for (let i of value) {
      newString = i + newString;
    }
    return newString;
  }
}
