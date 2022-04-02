import { Injectable } from '@angular/core';
import { PostModel } from '../models/post.model';

@Injectable()
export class FeedService {
  public posts: PostModel[] = [
    {
      id: 1,
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      image: '../../../assets/images/card.jpeg',
      likes: 15,
      isLiked: false
    },
    {
      id: 2,
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      image: '../../../assets/images/card.jpeg',
      likes: 5,
      isLiked: false
    },
    {
      id: 3,
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      image: '../../../assets/images/card.jpeg',
      likes: 34,
      isLiked: false
    },
    {
      id: 4,
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      image: '../../../assets/images/card.jpeg',
      likes: 1,
      isLiked: false
    },
    {
      id: 5,
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      image: '../../../assets/images/card.jpeg',
      likes: 75,
      isLiked: false
    },
    {
      id: 6,
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      image: '../../../assets/images/card.jpeg',
      likes: 39,
      isLiked: false
    },
    {
      id: 7,
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      image: '../../../assets/images/card.jpeg',
      likes: 14,
      isLiked: false
    },
    {
      id: 8,
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      image: '../../../assets/images/card.jpeg',
      likes: 57,
      isLiked: false
    },
    {
      id: 9,
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      image: '../../../assets/images/card.jpeg',
      likes: 19,
      isLiked: false
    }
  ];

  constructor() { }

  public likePost(targetPost: PostModel) {
    const postIdx = this.posts.findIndex((post) => post.id = targetPost.id);
    this.posts[postIdx].isLiked = true;
    this.posts[postIdx].likes = this.posts[postIdx].likes + 1;
  }

  public unlikePost(targetPost: PostModel) {
    const postIdx = this.posts.findIndex((post) => post.id = targetPost.id);
    this.posts[postIdx].isLiked = false;
    this.posts[postIdx].likes = this.posts[postIdx].likes - 1;
  }
}
