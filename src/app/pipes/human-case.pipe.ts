import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'HumanCase'
})
export class HumanCasePipe implements PipeTransform {

  transform(value: any): any {
    let humancaseString = "";

    if (value) {
      humancaseString += value[0].toUpperCase();

      for (let i = 1; i < value.length; i++) {
        if (value[i] == value[i].toUpperCase()) {
          humancaseString += ` ${value[i].toUpperCase()}`;
        } else {
          humancaseString += value[i];
        }
      }
    }

    return humancaseString;
  }

}
