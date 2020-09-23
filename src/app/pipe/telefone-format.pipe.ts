import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefoneFormat'
})
export class TelefoneFormatPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let result = '(' + value.substr(0, 2) + ')' + 
                 ' ' + value.substr(2, 5) + 
                 ' - ' + value.substr(7, 4);

    return result;
  }
}