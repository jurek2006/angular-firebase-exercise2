import { Component, OnInit } from '@angular/core';
import { FirestoreDataService } from 'src/app/firestore-data.service';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.scss']
})
export class NewPersonComponent implements OnInit {
  constructor(private firestoreDataService: FirestoreDataService) {}

  ngOnInit() {}

  addNewPerson() {
    this.firestoreDataService.createNewPerson();
  }
}
