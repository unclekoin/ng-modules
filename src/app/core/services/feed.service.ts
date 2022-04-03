import { Injectable } from '@angular/core';
import { PostModel } from '@shared/models/post.model';

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

  public likePost(targetPost: PostModel) {
    targetPost.isLiked = true;
    targetPost.likes += 1;

  }

  public unlikePost(targetPost: PostModel) {
    targetPost.isLiked = false;
    targetPost.likes -= 1;
  }
}
