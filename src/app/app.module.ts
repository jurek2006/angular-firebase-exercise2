import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NewPersonComponent } from './people/new-person/new-person.component';

@NgModule({
  declarations: [AppComponent, PeopleComponent, NewPersonComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
