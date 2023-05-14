import { Pipe, PipeTransform } from '@angular/core';
import { news } from '../interfaces/interfaces';

@Pipe({
  name: 'searchnews'
})
export class SearchnewsPipe implements PipeTransform {

  transform(value: news[], title: string): news[] {
    
    if(!value || title === ''){
      return value;
    }

    const filtered: news[]=[]
    for (let news of value){
      if (news.description.toLowerCase().includes(title.toLowerCase())){
        filtered.push(news);
      }
    }
    
    
    return filtered;
  }

}
