import {Injectable} from '@angular/core';

import {FacebookService, LoginOptions, LoginResponse, UIParams, UIResponse} from 'ngx-facebook';
import {FbloginService} from './fblogin.service';
import {Funcs} from '../utility/function';
import {LocalUser} from '@models/localuser';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';

export interface FbPostResponse {
  data: Array<{
    created_time: string
    id: string
  }>;
  next: string;
}

@Injectable()
export class AntaragniFeedService {

  accessToken: string;

  constructor(private fb: FacebookService,
              private loginService: FbloginService,
              private fun: Funcs,
              private afs: AngularFirestore) {
    fb.init({
      appId: '1799522573643704',
      version: 'v3.0'
    });
  }

  getAllPosts(): Observable<any> {
    return this.afs.collection('fbpage', ref => ref.orderBy('created_time', 'desc')).valueChanges();
  }

  loginWithOptions() {

    const loginOptions: LoginOptions = {
      auth_type: 'rerequest',
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'user_posts'
    };

    return this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
        this.accessToken = res.authResponse.accessToken;
      })
      .catch((err) => this.fun.handleError(err));

    // this.loginService.currentUser.subscribe(user =>
    //   this.fb.api(user.facebook.facebookID + '/permissions?access_Token=' + this.accessToken, 'get').then(
    //     log => console.log(log)
    //   ).catch(err => console.log(err))
    // );

  }

  sharePost(link: string, id: string): Promise<boolean> {
    const params: UIParams = {
      href: link,
      method: 'share'
    };
    return this.fb.ui(params)
      .then((res: UIResponse) => {
        if (res.error_message) {
          this.fun.handleError(res.error_message);
          return false;
        } else {
          this.loginService.currentUser.subscribe((user: LocalUser) =>
            this.fb.api(id + '/sharedposts', 'get', {accessToken: this.accessToken})
              .then((posts: FbPostResponse) => {
                user.campus.posts.push(posts.data[0].id);
                return this.loginService.updateUser(user);
              })
              .catch(err => this.fun.handleError(err.message)));
        }
        return true;
      }).catch(err => {
        this.fun.handleError(err.message);
        return false;
      });
  }
}
