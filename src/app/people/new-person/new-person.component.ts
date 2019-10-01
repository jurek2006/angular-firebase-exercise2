import { Component, OnInit } from '@angular/core';
import { FirestoreDataService } from 'src/app/firestore-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.scss']
})
export class NewPersonComponent implements OnInit {
  constructor(private firestoreDataService: FirestoreDataService) {}

  ngOnInit() {}

  onAddNewPerson(form: NgForm) {
    this.firestoreDataService.createNewPerson(form.value);
    form.reset();
  }
}
