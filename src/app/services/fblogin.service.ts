import {Injectable} from '@angular/core';
import {Router} from '@angular/router';


import {BehaviorSubject, Observable, of} from 'rxjs';
import {auth} from 'firebase/app';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import {Funcs} from '../utility/function';
import {catchError, switchMap} from 'rxjs/operators';
import {map} from 'rxjs/internal/operators';
import {ILocalUser, LocalUser} from '../models/localuser';

@Injectable({
  providedIn: 'root'
})
export class FbloginService {
  currentUser: BehaviorSubject<LocalUser>;
  $logged: Observable<LocalUser>;
  isAuthenticated$: Observable<boolean>;
  public userRef = (id: string): AngularFirestoreDocument<ILocalUser> => this.afs.doc(`fbusers/${id}`);
  init = (): void => {
    this.currentUser = new BehaviorSubject<LocalUser>(null);
    this.isAuthenticated$ = this.afAuth.authState.pipe(
      map((res) => !!res)
    );
    this.$logged = this.afAuth.authState.pipe(
      switchMap((user) => user ? this.userRef(user.uid).valueChanges() : of(null)),
      catchError(err => {
        this.functions.handleError(err.message);
        return of(null);
      })
    );
    this.$logged.subscribe((users) => this.currentUser.next(users));
  };

  signin = () => this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(
    (res) => this.userRef(res.user.uid).set({
      uid: res.additionalUserInfo.profile.id,
      name: res.additionalUserInfo.profile.name,
      email: res.additionalUserInfo.profile.email,
      facebooktoken: res.credential.accessToken,
      personal: {
        birthday: '',
        city: '',
        college: '',
        yearOfStudy: '',
        postalAddress: '',
        zipcode: 1,
        phoneNumber: res.user.phoneNumber,
        whatsAppNumber: '',
        picture: res.additionalUserInfo.profile.picture.data.url,
      },
      campus: {
        isAmbassador: true,
         posts:  [],
         validPosts:  [],
         likes: 0,
         shares: 0,
         otherPoints: 0,
         ideaPoints: 0,
         totalPoints: 0,
         isExclusive: false,
         rank: false,
         exclusiveApproved: false,
      }
    }as ILocalUser).then(() =>
      this.router.navigate(['dashboard'])
    )
  );

  signOut() {
    this.afAuth.auth.signOut()
      .then(() => this.router.navigate(['/']))
      .catch(err => this.functions.handleError(err.message));
  }

  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private functions: Funcs) {
    this.init();
  }
}
