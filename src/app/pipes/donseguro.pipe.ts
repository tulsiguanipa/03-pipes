import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'donseguro'
})
export class DonseguroPipe implements PipeTransform {

  
  constructor(private donSanitazer: DomSanitizer) {  }


  transform(value: string, url:string): any {
    return this.donSanitazer.bypassSecurityTrustResourceUrl(url + value);
  }

}
