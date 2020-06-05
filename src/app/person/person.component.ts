import { Component } from '@angular/core';
import { Person } from './person.model';
import { Sorter } from './sorter';
import { PersonService } from './person.service';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.scss']
})
export class PersonComponent {
    order: string;
    columnName: string;

    constructor(protected personService: PersonService) {
        this.order = "";
        this.columnName = "firstName";
    }

    getPersonList = () => {
        return this.personService.index();
    }

    sort = (columnName: string): void => {
        this.order = this.order == "asc" ? "desc": "asc";
    }
}