import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultCards = [];
    for (const post of value) {
      if (post.nombre.indexOf(arg) > -1) {
        resultCards.push(post);
      };
    };

    return resultCards;
  }

}
