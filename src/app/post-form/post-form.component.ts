import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../interface/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<Post>();
  constructor() {}

  ngOnInit(): void {}
  emitSubmitEvent = (form: NgForm): void => {
    let newPost: Post = {
      title: form.value.title,
      thought: form.value.thought,
    };
    this.submitEvent.emit(newPost);
  };
}
