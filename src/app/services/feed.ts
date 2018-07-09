import {Injectable} from '@angular/core';

import {FacebookService, LoginOptions, LoginResponse, UIParams, UIResponse} from 'ngx-facebook';
import {FbloginService} from './fblogin.service';
import {Funcs} from '../utility/function';

@Injectable()
export class AntaragniFeedService {

  constructor(private fb: FacebookService,
              private loginService: FbloginService,
              private fun: Funcs) {
    fb.init({
      appId: '1799522573643704',
      version: 'v3.0'
    });
  }

  getAllPosts(): Promise<any> {
    // return this.fb.api('antaragni.iitk?fields=posts{message,full_picture,link,permalink_url}', 'get');
    return this.fb.api('antaragni.iitk/posts?since=1493856000&limit=100&fields=message,full_picture,link,permalink_url', 'get');
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
      })
      .catch((err) => this.fun.handleError(err));

  }

  sharePost(link: string): Promise<boolean> {
    console.log(link);
    const params: UIParams = {
      href: link,
      method: 'share'
    };
    return this.fb.ui(params)
      .then((res: UIResponse) => {
        console.log(res);
        if (res.error_message) {
          return false;
        } else if (res.post_id) {
          console.log(res.post_id);
          return true
        }
        return false;
      }).catch(err => {
        console.log(err);
        return false;
      });
  }
}
