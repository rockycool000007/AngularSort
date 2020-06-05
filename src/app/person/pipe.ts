import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({ name: 'sortBy' })
export class SortByPipe implements PipeTransform {

  transform(data: any[], orderByStatus = '', column: string = ''): any[] {
    // If there is no data return as it is
    if (!data || orderByStatus === '' || !orderByStatus) { 
        return data; 
    }
    
    // If there is just one record return as it is
    if (data.length <= 1) { 
        return data; 
    }

    // for other items
    if (!column || column === '') { 
      if(orderByStatus==='asc'){return data.sort()}
      else{return data.sort().reverse();}
    }
    return orderBy(data, [column], [orderByStatus]);
  }
}