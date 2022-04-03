import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from '@shared/components/post/post.component';


@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule],
  exports: [PostComponent]
})
export class SharedModule { }
