import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { FacebookService, UIParams, UIResponse } from 'ngx-facebook';
import { FbloginService } from './fblogin.service';

@Injectable()
export class AntaragniFeedService {

  constructor(private fb: FacebookService,
              private loginService: FbloginService
              ) { }

  getAllPosts(): Promise<any> {
    // return this.fb.api('antaragni.iitk?fields=posts{message,full_picture,link,permalink_url}', 'get');
    return this.fb.api('antaragni.iitk/posts?since=1493856000&limit=100&fields=message,full_picture,link,permalink_url', 'get');
  }
}
