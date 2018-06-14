import { Injectable } from '@angular/core';
import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ValidatorFn} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

import {LoggedUserService} from '../../services';

import {LocalUser} from '../../models';
@Injectable({
  providedIn: 'root'
})
export class FbloginService {

  constructor(private loginService: LoggedUserService,
              private router: Router,
              private snackbar: MatSnackBar,
              @Inject(FormBuilder) fb: FormBuilder) { }
              
  signin=()=>this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(
    (res) => this.userRef(res.user.uid).set({
    uid: res.user.uid,
    displayName: res.user.displayName,
    email: res.user.email,
    levelsRequested: null,
    levelsCurrent: ['member']
  } )
  )
}
