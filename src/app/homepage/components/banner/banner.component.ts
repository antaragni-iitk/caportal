import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { catchError } from 'rxjs/internal/operators';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  title = 'Header';
  shownavmenu = false;
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  onhit(){
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(
      (res) => console.log(res)
    )
  }


}
