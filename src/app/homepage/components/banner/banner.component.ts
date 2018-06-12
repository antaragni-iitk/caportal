import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import {catchError} from 'rxjs/internal/operators';
import {Injectable} from '@angular/core';
import {Observable, from as fromPromise, BehaviorSubject} from 'rxjs';
// import {AntUser} from 'app/ares-users/models/localUser';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { AntUser} from '../../../models/localuser';
import {Router} from '@angular/router';
import {Funcs} from '../../../utility/function';
import {HttpClient} from '@angular/common/http';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import { first} from 'rxjs/operators';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  currentUser: BehaviorSubject<AntUser>;
  $logged: Observable<AntUser>;
  isAuthenticated$: Observable<boolean>;
  public userRef = (id: string): AngularFirestoreDocument<AntUser> => this.afs.doc(`fbusers/${id}`);
  title = 'Header';
  shownavmenu = false;
  constructor(private http: HttpClient,
            private router: Router,
            private afAuth: AngularFireAuth,
            private afs: AngularFirestore,
            private functions: Funcs) {
  this.init();
}

init = (): void => {
  this.currentUser = new BehaviorSubject<AntUser>(null);
  this.isAuthenticated$ = this.afAuth.authState.pipe(
    map((res) => !!res)
  );
  this.$logged = this.afAuth.authState.pipe(
    switchMap((user) => user ? this.userRef(user.uid).valueChanges() : of(null)),
    catchError(err => {
      this.functions.handleError(err.message);
      return of(null)
    })
  );
  this.$logged.subscribe((users) => this.currentUser.next(users));
};
ngOnInit(){

}
  onhit(){
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(
      (res) => this.userRef(res.user.uid).set({
      uid: res.user.uid,
      displayName: res.user.displayName,
      email: res.user.email,
      levelsRequested: null,
      levelsCurrent: ['member']
    } )
    )
  }


}
