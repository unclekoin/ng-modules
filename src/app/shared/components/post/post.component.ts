import { Component, Input } from '@angular/core';
import { PostModel } from '@shared/models';
import { FeedService} from '@core/services';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [FeedService]
})
export class PostComponent {
  @Input() post!: PostModel;

  constructor(public feedService: FeedService) { }

  public like(targetPost: PostModel) {
    this.feedService.likePost(targetPost);
  }

  public unlike(targetPost: PostModel) {
    this.feedService.unlikePost(targetPost);
  }

}
