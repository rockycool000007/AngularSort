import { Observable, of } from "rxjs";
import { Injectable } from '@angular/core';
import { Person } from './person.model';

@Injectable()
class PersonService {
	index(): Observable<Array<Person>> {
        const personList = [
            {
                age: 10, firstName: 'Mike', lastName: 'Samuel'
            },
            {
                age: 30, firstName: 'Robin', lastName: 'Chartier'
            },
            {
                age: 20, firstName: 'Alan', lastName: 'Carlos'
            },
            {
                age: 10, firstName: 'Suparn', lastName: 'Badwaik'
            },
            {
                age: 30, firstName: 'Ramanand', lastName: 'Sagar'
            },
            {
                age: 20, firstName: 'Sagar', lastName: 'Gaidhani'
            }
        ];
        return of(personList);
    }
}

export { PersonService};