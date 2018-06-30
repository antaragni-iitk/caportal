import { Component, OnInit , HostBinding } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import { AntaragniFeedService } from '../services/feed';
import { trigger, state, animate, transition, style } from '@angular/animations';

interface IAlert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-antaragni-feed',
  templateUrl: './antaragni-feed.component.html',
  styleUrls: ['./antaragni-feed.component.css'],
  animations: [trigger('flyInAnimation', [
    state('*', style({opacity: 1})),
    transition(':enter', [
      style({opacity: 0}),
      animate('1s .12s ease-out', style({opacity: 1}))
    ]),
    transition(':leave', [
      style({opacity: 1, transform: 'translate(0,0)'}),
      animate('.1s ease-in', style({opacity: 0, transform: 'translate(0,100vh)'}))
    ])
  ])],
})
export class AntaragniFeedComponent implements OnInit {
  @HostBinding('@flyInAnimation') flyInAnimation = true;
  message =  new Subject<string>();
  feeds: any;
  alert: IAlert = {
    type: 'success',
    message: null
  };

  constructor(private feedService: AntaragniFeedService,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.getAllFeeds();
    this.message.subscribe((message) => this.snackbar.open(message, '', { duration: 2000 }));
  }

  getAllFeeds() {
    this.feedService.getAllPosts()
      .then((res) => {
        this.feeds = res.data;
      });
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
