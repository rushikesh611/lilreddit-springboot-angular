import { Component } from '@angular/core';
import { SubredditModel } from 'src/app/subreddit/subreddit-response';
import { SubredditService } from 'src/app/subreddit/subreddit.service';

@Component({
  selector: 'app-subreddit-sidebar',
  templateUrl: './subreddit-sidebar.component.html',
  styleUrls: ['./subreddit-sidebar.component.css']
})
export class SubredditSidebarComponent {

  subreddits: SubredditModel[] = [];
  displayViewAll: boolean = false;

  constructor(private subredditService: SubredditService) {
    this.subredditService.getAllSubreddits().subscribe(data => {
      if (data.length > 3) {
        this.subreddits = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.subreddits = data;
      }
    });
  }

}
