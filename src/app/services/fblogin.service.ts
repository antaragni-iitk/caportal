import { Injectable } from '@angular/core';
import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ValidatorFn} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';



import {Observable, from as fromPromise, BehaviorSubject} from 'rxjs';
import {auth} from 'firebase/app';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import {Funcs} from '../utility/function';
import {HttpClient} from '@angular/common/http';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {catchError, first} from 'rxjs/operators';
import {map} from 'rxjs/internal/operators';
import {LocalUser,ILocalUser} from '../models/localuser';
@Injectable({
  providedIn: 'root'
})
export class FbloginService {
  currentUser: BehaviorSubject<LocalUser>;
$logged: Observable<LocalUser>;
isAuthenticated$: Observable<boolean>;
    public userRef = (id: string): AngularFirestoreDocument<ILocalUser> => this.afs.doc(`fbusers/${id}`);

  constructor(  private router: Router,
                private afAuth: AngularFireAuth,
                private afs: AngularFirestore,
                private functions: Funcs) {
                this.init();
              }

              init = (): void => {
                  this.currentUser = new BehaviorSubject<LocalUser>(null);
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


  signin=()=>this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(
    (res) => this.userRef(res.user.uid).set({
    uid: res.user.uid,
    name: res.user.displayName,
    email: res.user.email,
    facebooktoken: res.user.refreshToken,
    personal: {
      birthday: '',
       city: '',
       college: '',
       yearOfStudy: '',
       postalAddress: '',
       zipcode: 1,
       phoneNumber: res.user.phoneNumber,
       whatsAppNumber: '',
       picture: res.user.photoURL,

    }
  }as ILocalUser )
  )
}
