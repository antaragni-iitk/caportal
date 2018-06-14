import {Component, OnInit} from '@angular/core';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase/app';
import {catchError} from 'rxjs/internal/operators';
import {Injectable} from '@angular/core';
import {Observable, from as fromPromise, BehaviorSubject} from 'rxjs';
// import {AntUser} from 'app/ares-users/models/localUser';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
// import {AntUser} from '../../../models/localuser';
import {Router} from '@angular/router';
import {Funcs} from '../../../utility/function';
import {HttpClient} from '@angular/common/http';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {first} from 'rxjs/operators';
import {map} from 'rxjs/internal/operators';
import {FbloginService} from '../../../services/fblogin.service'
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  shownavmenu = false;

  constructor(private loginService: FbloginService) {
  }
  ngOnInit() {

  }

  onhit() {
    this.loginService.signin();

  }


}
