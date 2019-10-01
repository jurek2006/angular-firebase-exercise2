import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDataService {
  people: Person[];

  constructor(private db: AngularFirestore) {}

  public fetchPeople() {
    return this.db
      .collection('people')
      .snapshotChanges()
      .pipe(
        map(docArray => {
          return docArray.map(doc => {
            return {
              id: doc.payload.doc.id,
              firstName: doc.payload.doc.data()['firstName'],
              lastName: doc.payload.doc.data()['lastName']
            };
          });
        })
      );
  }
}
