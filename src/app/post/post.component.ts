import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../interface/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() postRef: Post;
  @Output() deleteEvent = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  emitDeleteEvent = (): void => {
    this.deleteEvent.emit();
  };
}
