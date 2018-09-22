import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(title: string, titleText: string): string {
    return titleText + " : " + title;
  }

}
