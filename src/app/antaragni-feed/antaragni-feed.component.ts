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
    console.log(facebookfeed);
  }

  // share(post: any) {
  //   this.feedService.sharePost(post.permalink_url)
  //     .then((success) => {
  //       if (success) {
  //         this.alert.type = 'success';
  //         console.log('Sent message');
  //         this.message.next('The Post has been shared on Facebook');
  //       } else {
  //         this.alert.type = 'danger';
  //         this.message.next('Some Error occurred. The Post was not shared');
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       this.alert.type = 'danger';
  //       this.message.next('Some Error occurred. The Post was not shared');
  //     });
  // }

}
