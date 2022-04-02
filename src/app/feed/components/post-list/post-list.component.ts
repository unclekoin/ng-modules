import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/post.model';
import { FeedService } from '../../services/feed.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public posts!: PostModel[];

  constructor(private feedService: FeedService) {
  }

  ngOnInit(): void {
    this.posts = this.feedService.posts;
  }

  public likePost(targetPost: PostModel) {
    this.feedService.likePost(targetPost);
  }

  unlikePost(targetPost: PostModel) {
    this.feedService.unlikePost(targetPost);
  }

}
