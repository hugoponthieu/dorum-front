import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from "../button/button.component";
import { Post } from '../models/post';
import { PostsService } from '../posts.service';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  imports: [ButtonComponent],
  providers: [PostsService]
})
export class PostComponent {
  @Input()
  deletePost!: () => {};
  @Input() post: Post = {
    author: '',
    content: '',
    id: 0,
    createdAt: new Date()
  };
  isAuthor!: boolean
  topicId: string | null = null;
  delete = "Delete this post"
  edit = "Edit this post"
  constructor(private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.topicId = params.get('id');
    });
    this.isAuthor = this.authenticationService.currentUserValue == this.post.author;
  }

  toEditScreen() {
    this.router.navigate(['/topic/' + this.topicId + '/post/' + this.post.id])
  }
}
