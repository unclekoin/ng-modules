import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { FeedService } from './services/feed.service';



@NgModule({
  declarations: [
    PostComponent,
    PostListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [FeedService],
  exports: [
    PostListComponent
  ]
})
export class FeedModule { }
