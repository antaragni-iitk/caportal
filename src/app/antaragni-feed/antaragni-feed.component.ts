import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Subject} from 'rxjs/Subject';
import {AntaragniFeedService} from '../services/feed';
import {facebookfeed} from './mockfeed';

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
              private snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.getAllFeeds();
    // this.message.subscribe((message) => this.snackbar.open(message, '', {duration: 2000}));
  }

  getAllFeeds() {
    // this.feedService.getAllPosts()
    //   .then((res) => {
    //     this.feeds = res.data;
    //   });
    this.feeds = facebookfeed.data;
  }

  sharePost(id: string) {
    this.feedService.loginWithOptions().then(() =>
      this.feedService.sharePost(id)
    );
  }

}
