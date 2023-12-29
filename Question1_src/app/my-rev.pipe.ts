import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string 
  {
     let revStr = "";
      /*for(let i = value.length - 1; i >= 0; i--)
      {
        revStr = revStr + value.charAt(i);
      }

      return revStr;*/

     for(let i = 0; i < value.length; i++)
      {
        revStr = value.charAt(i) + revStr;
      }

      //revStr=value.split("").reverse().join("");
      return revStr;
  }

}
