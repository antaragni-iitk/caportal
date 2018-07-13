import {Component, OnInit} from '@angular/core';
import {FbloginService} from '@services/fblogin.service';
import {LocalUser} from '@models/localuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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

  constructor(private fblogin: FbloginService) {
  }

  ngOnInit() {
    this.fblogin.currentUser.subscribe((user: LocalUser) => {
      this.newuser = user;
      this.newuser$ = JSON.parse(JSON.stringify(user));
    });
  }

  onSubmit() {
    this.newuser.firstUpdate = true;
    this.fblogin.updateRegistration(this.newuser);
  }
}
