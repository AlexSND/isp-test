import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if(!searchText) {
      return items
    }
    const searchQuery = searchText.toUpperCase()
    return items.filter(searchItem => {
      const searchString = searchItem.name.toUpperCase()
      return searchString.includes(searchQuery)
    })
  }
}
