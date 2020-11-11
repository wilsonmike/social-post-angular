import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Running',
      thought: 'Good shoes are important',
    },
    {
      title: 'React',
      thought: 'React is a cool framework',
    },
    {
      title: 'Cover Letter',
      thought: 'need to work on cover letter',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  onDelete = (index: number): void => {
    this.posts.splice(index, 1);
  };
  onSubmit = (post: Post): void => {
    this.posts.push(post);
  };
}
