import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({ name: 'sortData' })
export class SortDataPipe implements PipeTransform {
  transform(data: any[], direction = '', columnName: string = ''): any[] {
    if (!data || direction === '') { return data; }   			// If there is no data in the array
    if (data.length <= 1) { return data; }          	        // If there is just one record in the array
    if (columnName === '' || !columnName) {             	    // If there are multiple records 
      if (direction === 'asc'){ return data.sort(); }
      else { return data.sort().reverse(); }
    }
    return orderBy(data, [columnName], [direction]);
  }
}