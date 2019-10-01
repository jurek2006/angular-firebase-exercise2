import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../person';
import { FirestoreDataService } from '../firestore-data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people: Observable<Person[]>;
  test = ['jeden', 'dwa', 'trzy'];

  constructor(private firestoreDataService: FirestoreDataService) {}

  ngOnInit() {
    this.people = this.firestoreDataService.fetchPeople();
    console.log(this.people);
  }
}
