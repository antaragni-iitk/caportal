import { AngularFirestore } from '@angular/fire/firestore';
import { Component, ElementRef, OnInit, ViewChild, Inject } from '@angular/core';
import { UiService } from '../services/ui.service';
import { FbloginService } from '../services/fblogin.service';
import { LocalUser } from '../models/localuser';
import { Observable } from 'rxjs';
import { bounceOutLeft } from '../animations/bounceOutLeft';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

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

  constructor(private ui: UiService, private fbloginservice: FbloginService, private afs: AngularFirestore, public dialog: MatDialog) {
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
    if (Notification.permission == "granted") this.initializeNotification();
    else this.openDialog();
  }
  sendTokenToServer(token) {
    if (!this.ui.mobile) {
      this.newuser.notificationTokenPc = token;
      this.fbloginservice.updateRegistration(this.newuser);
      this.afs.doc('/notificationsWeb/' + this.newuser.uid).update({ tokenPc: token });
    }
    else {
      this.newuser.notificationTokenMob = token;
      this.fbloginservice.updateRegistration(this.newuser);
      this.afs.doc('/notificationsWeb/' + this.newuser.uid).update({ tokenMob: token });
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(NotificationRequestDialog, {
      minWidth: '30vw',
      minHeight: '25vh',
      data: 'Please allow notifications to allow us connect better! :)'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.initializeNotification();
    });
  }
  initializeNotification() {
    var app = firebase.apps[0]
    const messaging = firebase.messaging();
    messaging.usePublicVapidKey("BKGwyYLhdCvRYM8ktb0PxstShYXyw2crCchLUdhA9_mykfa3ibk3mtIOfU3NcmMyYUVzGtjNMRVBbcpO4_6N9wM");
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        messaging.getToken().then(token => {
          if ((!this.newuser.notificationTokenPc && !this.ui.mobile) || (!this.newuser.notificationTokenMob && this.ui.mobile)) {
            window['fcmToken'] = token
            if (this.newuser.hasOwnProperty('firstUpdate') && this.newuser.firstUpdate) {
              this.sendTokenToServer(token);
            }
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
        messaging.onMessage((payload) => {
          console.log('Message received. ', payload);
          // ...
        });
      } else {
        console.log('Unable to get permission to notify.');
      }
    });
  }
}

@Component({
  selector: 'notification-request-dialog',
  templateUrl: 'notification-request-dialog.html',
})
export class NotificationRequestDialog {

  constructor(
    public dialogRef: MatDialogRef<NotificationRequestDialog>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}