import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FbloginService} from '../../../services/fblogin.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {
  model;
  user: Observable<any>;
  submitted = false;
  _state = true;
  constructor(private fbloginservice: FbloginService,
              private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.model = {
      subject: '',
      message: ''
    };
    this.user = this.fbloginservice.currentUser;
  }

  _clicked1() {
    this._state = true;
  }

  _clicked2() {
    this._state = false;
  }

  evaluate() {
    this.user.subscribe((u) => {
      this.afs.collection('ideas').add({uid: u.uid, name: u.name, model: this.model});
    });
  }
}
