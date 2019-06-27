import { AngularFirestore } from 'angularfire2/firestore';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UiService } from '../services/ui.service';
import { FbloginService } from '../services/fblogin.service';
import { LocalUser } from '../models/localuser';
import { Observable } from 'rxjs';
import { bounceOutLeft } from '../animations/bounceOutLeft';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    bounceOutLeft
  ]
})
export class DashboardComponent implements OnInit {
  state;
  @ViewChild('refcode', { static: false }) ref: ElementRef;
  mobile = window.screen.width < 1023;
  user: Observable<LocalUser>;
  @ViewChild('drawer', { static: true }) drawer;
  showFiller = false;
  points = {
    'Idea Points': 'otherPoints',
    'Likes': 'likes',
    'Shares': 'shares',
    'Other Points': 'ideaPoints',
    'Total Points': 'totalPoints',
  };
  pointkeys = Object.keys(this.points);
  newuser = new LocalUser();
  userT;

  constructor(private ui: UiService, private fbloginservice: FbloginService, private afs: AngularFirestore) {
    this.userT = this.fbloginservice.currentUser;
    this.user = this.userT
    this.userT.subscribe(res => {
      this.newuser = res
    })
  }

  getState(outlet) {
    // Changing the activatedRouteData.state triggers the animation
    return outlet.activatedRoute.url;
  }

  copyit() {
    this.ref.nativeElement.select();
    document.execCommand('copy');
    this.ref.nativeElement.blur();
  }

  ngOnInit() {
    this.ui.sidenav.subscribe(() => this.drawer.toggle());
    this.initializeNotification();
  }
  sendTokenToServer(token) {
    this.newuser.notificationToken = token
    this.fbloginservice.updateRegistration(this.newuser);
    this.afs.doc('/notificationsWeb/' + this.newuser.uid).update({token: token});
  }
  initializeNotification() {
    var app = firebase.apps[0]
    const messaging = firebase.messaging();
    messaging.usePublicVapidKey("BKGwyYLhdCvRYM8ktb0PxstShYXyw2crCchLUdhA9_mykfa3ibk3mtIOfU3NcmMyYUVzGtjNMRVBbcpO4_6N9wM");
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        messaging.getToken().then(token => {
          if (!this.newuser.notificationToken) {
            window['fcmToken'] = token
          }
        })
        messaging.onTokenRefresh(() => {
          messaging.getToken().then((refreshedToken) => {
            console.log('Token refreshed.');
            this.sendTokenToServer(refreshedToken);
          }).catch((err) => {
            console.log('Unable to retrieve refreshed token ', err);
            // showToken('Unable to retrieve refreshed token ', err);
          });
        });
        // TODO(developer): Retrieve an Instance ID token for use with FCM.
        // ...
      } else {
        console.log('Unable to get permission to notify.');
      }
    });
  }
}
