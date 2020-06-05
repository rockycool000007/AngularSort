import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonService } from './person/person.service';
import { SortDataPipe } from './person/pipe';
import { SortOrder } from './person/sorter';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    SortDataPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PersonService
  ],
  bootstrap: [AppComponent, PersonComponent]
})
export class AppModule { }
