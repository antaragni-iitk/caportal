import {Component, OnInit} from '@angular/core';
import {FbloginService} from '@services/fblogin.service';
import {LocalUser} from '@models/localuser';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  refCode: string;
  sexes = [
    {id: 1, name: 'Male'},
    {id: 2, name: 'Female'},
    {id: 3, name: 'Other'},
  ];

  collegeYears = [
    {id: 1, name: '1st Year'},
    {id: 2, name: '2nd Year'},
    {id: 3, name: '3rd Year'},
    {id: 4, name: '4th Year'},
    {id: 5, name: '5+ Year'}
  ];
  newuser = new LocalUser();
  newuser$ = new LocalUser();

  constructor(private fblogin: FbloginService, private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.fblogin.currentUser.subscribe((user: LocalUser) => {
      this.newuser = user;
      this.newuser$ = JSON.parse(JSON.stringify(user));
    });
    this.afs.doc('/config/counter').valueChanges().subscribe((res: { data: number }) => {
      const count = (res.data + 1000).toString();
      this.refCode = 'CA' + count[0] + count[3] + count[1] + count[2];
      console.log(res, this.refCode);
    });
  }

  onSubmit() {
    this.newuser.firstUpdate = true;
    this.newuser.campus.referralCode = this.refCode;
    this.fblogin.updateRegistration(this.newuser);
  }
}
