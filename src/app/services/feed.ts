import {Injectable} from '@angular/core';

import {FacebookService, LoginOptions, LoginResponse, UIParams, UIResponse} from 'ngx-facebook';
import {FbloginService} from './fblogin.service';
import {Funcs} from '../utility/function';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';

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
              private http: HttpClient) {
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

  sharePost(link: string, id: string): Promise<boolean> {
    console.log(link);
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
          this.http.get('https://graph.facebook.com/v3.0/' + id + '/sharedposts?' +
            'access_token=EAAZAkpZCZCEb7gBAGRO4ZAtm3xJHxhONGTjY8F9ZBmZBaew4BTv2adc19HCSlyctMS00hAs5xnCCjz4MsJ8meBe4gZAZA0ICJhdYKxcbik3kEVTZBDKCHPHmSqlIbFk2uP3ZCZB2wYFBxWcyLvPiCcJBjmIIvLKXFUOHSTlAvBQFAVojydoCJHTCz2HajTjj8WSTVwQ1VsZCiCuwNQZDZD'
          ).pipe(
            catchError(err => this.fun.handleError(err))
          ).subscribe(
            (posts: FbPostResponse) => console.log(posts.data)
          );
        }
        return false;
      }).catch(err => {
        console.log(err);
        return false;
      });
  }
}
