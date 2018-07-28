import {Injectable} from '@angular/core';

import {FacebookService, UIParams, UIResponse} from 'ngx-facebook';
import {FbloginService} from './fblogin.service';
import {Funcs} from '../utility/function';
import {LocalUser} from '@models/localuser';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {take} from 'rxjs/internal/operators';
import {environment} from '@environments/environment';

export interface FbPostResponse {
  data: Array<{
    created_time: string
    id: string
  }>;
  next: string;
}

@Injectable()
export class AntaragniFeedService {

  constructor(private fb: FacebookService,
              private loginService: FbloginService,
              private fun: Funcs,
              private afs: AngularFirestore) {
    fb.init({
      appId: environment.fbAppID,
      version: 'v3.0'
    });
  }

  getAllPosts(): Observable<any> {
    return this.afs.collection('fbpage', ref => ref.orderBy('created_time', 'desc')).valueChanges();
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
          this.loginService.currentUser.pipe(take(1)).subscribe((user: LocalUser) =>
            this.fb.api(user.facebook.facebookID + '/feed', 'get', {fields: 'id', since: '-20 seconds', access_token: user.facebook.Token})
              .then((posts: FbPostResponse) => {
                if (posts.data.length !== 0) {
                  user.campus.validPosts.push(posts.data[0].id);
                }
                user.campus.posts.push(id);
                user.campus.shares += 5;
                user.campus.totalPoints += 5;
                return this.loginService.updateUser(user);
              }));
        }
        this.fun.handleError('successfully shared');
        return true;
      }).catch(err => {
        this.fun.handleError(err.message);
        return false;
      });
  }
}
