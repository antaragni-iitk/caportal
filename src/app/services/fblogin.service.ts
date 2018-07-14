import {Injectable, NgZone} from '@angular/core';
import {Router} from '@angular/router';


import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import {Funcs} from '../utility/function';
import {catchError, switchMap} from 'rxjs/operators';
import {distinctUntilChanged, map} from 'rxjs/internal/operators';
import {ILocalUser, LocalUser} from '../models/localuser';
import {UiService} from '@services/ui.service';
import {auth} from 'firebase';
import {FacebookService} from 'ngx-facebook';
import {environment} from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FbloginService {
  currentUser: BehaviorSubject<LocalUser>;
  $logged: Observable<LocalUser>;
  isAuthenticated$: Observable<boolean>;
  dataFetched = new Subject<boolean>();
  public userRef = (id: string): AngularFirestoreDocument<any> => this.afs.doc(`fbusers/${id}`);
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
    this.$logged.subscribe((users) => {
      this.currentUser.next(users);
      this.dataFetched.next(!!users);
    });
  };

  signin = () => {
    const provider = new auth.FacebookAuthProvider();
    provider.addScope('user_posts,user_link,user_birthday');
    return this.afAuth.auth.signInWithPopup(provider)
      .catch(err => this.functions.handleError(err.message))
      .then((res: any) => res.additionalUserInfo.profile.link ?
        this.fb.api('/me?fields=link', 'get', {access_token: res.credential.accessToken}).then(
          user => this.setUser(res, user)
        ) : this.setUser(res, res)
      ).catch(err => {
        this.functions.handleError(err.message);
        console.log(err);
      });
  };

  setUser = (res, user) =>
    // res.additionalUserInfo.isNewUser ?
    this.userRef(res.user.uid).set({
      uid: res.user.uid,
      name: res.additionalUserInfo.profile.name,
      email: {
        value: res.additionalUserInfo.profile.email,
        verified: res.user.emailVerified,
      },
      facebook: {
        Token: res.credential.accessToken,
        facebookID: res.additionalUserInfo.profile.id,
        facebookLink: user.link,
      },
      personal: {
        gender: res.additionalUserInfo.profile.gender,
        phoneNumber: res.user.phoneNumber,
        picture: res.additionalUserInfo.profile.picture.data.url,
        birthday: res.additionalUserInfo.profile.birthday
      },
      campus: {
        isAmbassador: true,
        posts: [],
        validPosts: [],
        likes: 0,
        shares: 0,
        otherPoints: 0,
        ideaPoints: 0,
        totalPoints: 0,
        isExclusive: false,
        rank: false,
        exclusiveApproved: false,
      }
    }as ILocalUser);
// :
//       this.userRef(res.user.uid).update({
//         'facebook.Token': res.credential.accessToken,
//       });

  updateUser = (user: LocalUser) => this.userRef(user.uid).set({...user} as ILocalUser)
    .then(() => this.currentUser.next(user));

  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private functions: Funcs,
              public zone: NgZone,
              private ui: UiService,
              private fb: FacebookService,) {
    fb.init({
      appId: environment.fbAppID,
      version: 'v3.0'
    });
    this.dataFetched.pipe(distinctUntilChanged()).subscribe(
      (val) => val ? this.zone.run(() => this.router.navigate(['/dashboard'])) : false
    );
    this.init();
  }

  updateRegistration(user: LocalUser) {
    this.updateUser(user)
      .then(() => this.zone.run(() => this.router.navigate(['/dashboard/home'])))
      .catch((err) => this.functions.handleError(err));
  }

  signOut() {
    this.afAuth.auth.signOut()
      .then(() => this.zone.run(() => this.router.navigate(['/'])))
      .catch(err => this.functions.handleError(err.message));
    this.ui.scrollPos.next(false);
  }
}

