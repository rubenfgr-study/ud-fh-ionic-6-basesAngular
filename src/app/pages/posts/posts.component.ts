import { Observable } from 'rxjs';
import { DataService, Post } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: [],
})
export class PostsComponent implements OnInit {
  posts!: Observable<Post[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.posts = this.dataService.getPosts();
  }

  listenClickPost(id: number) {
    console.log('Click en:', id);
  }
}
