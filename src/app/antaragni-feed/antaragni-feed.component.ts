import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {AntaragniFeedService} from '../services/feed';
import {HttpClient} from '@angular/common/http';

interface IAlert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-antaragni-feed',
  templateUrl: './antaragni-feed.component.html',
  styleUrls: ['./antaragni-feed.component.css'],
})
export class AntaragniFeedComponent implements OnInit {
  message = new Subject<string>();
  feeds: any;
  alert: IAlert = {
    type: 'success',
    message: null
  };

  constructor(private feedService: AntaragniFeedService,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.feeds = this.feedService.getAllPosts();
  }

  sharePost(post) {
    this.feedService.sharePost(post.permalink_url, post.id);
  }

}
