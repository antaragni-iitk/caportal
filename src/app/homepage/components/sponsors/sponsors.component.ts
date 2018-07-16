import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {environment} from '@environments/environment';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  constructor(private afs: AngularFirestore) { }
  sponsors;
  ngOnInit() {
    this.sponsors = this.afs.doc(`${environment.contentCollectionName}/ca_sponsors`).valueChanges();
  }

}
