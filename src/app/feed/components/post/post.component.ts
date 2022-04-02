import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostModel } from '../../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post!: PostModel;
  @Output() like: EventEmitter<PostModel> = new EventEmitter<PostModel>();
  @Output() unlike: EventEmitter<PostModel> = new EventEmitter<PostModel>();

  constructor() { }

  ngOnInit(): void {
  }

  public likePost(targetPost: PostModel) {
    this.like.emit(targetPost);
  }

  public unlikePost(targetPost: PostModel) {
    this.unlike.emit(targetPost);
  }

}
