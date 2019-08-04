import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decorate'
})
export class DecoratePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log("value",value);
    console.log("value",args);
    return args[0]+value+args[1];
  }

}
