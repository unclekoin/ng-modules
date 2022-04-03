import { Component, OnInit } from '@angular/core';
import { PostModel } from '@shared/models';
import { FeedService } from '@core/services';


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

}
