import { Component } from '@angular/core';
import { PostModel } from '../post-model';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent {


  posts$ : PostModel[] | undefined;

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts$ = post;
      console.log(this.posts$)
    });
  }
}
