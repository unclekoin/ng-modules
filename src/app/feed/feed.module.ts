import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListComponent } from '@feed/components/post-list/post-list.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PostListComponent
  ]
})
export class FeedModule { }
