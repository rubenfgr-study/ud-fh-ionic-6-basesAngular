import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from './../../../services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [],
})
export class PostComponent {
  @Input() post!: Post;

  @Output() clickPost: EventEmitter<number> = new EventEmitter<number>();

  onClick() {
    this.clickPost.emit(this.post.id);
  }
}
