import { Pipe, PipeTransform } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
 
  transform(userList: any, filterString:string): any{
    if (!userList || !filterString){
      return userList;
    }
    filterString = filterString.toLocaleLowerCase();

    return userList.filter((user: { first_name: string; })=> 
      user.first_name.toLocaleLowerCase().includes(filterString.toLocaleLowerCase()));
    
    }
  }


