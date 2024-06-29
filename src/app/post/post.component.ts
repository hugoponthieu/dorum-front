import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from "../button/button.component";
import { Post } from '../models/post';
@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  imports: [MatIconModule, ButtonComponent]
})
export class PostComponent {
  @Input() postId = '1';
  topicId: string | null = null;
  delete = "Delete this post"
  edit = "Edit this post"
  constructor(private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.topicId = params.get('id');
    });
  }

  toEditScreen() {
    this.router.navigate(['/topic/' + this.topicId + '/post/' + this.postId])
  }
  deletePost() {
    console.log(this.postId)
  }

  @Input() post: Post = {
    author: '',
    content: '',
    id: '',
    date: ''
  };
}
