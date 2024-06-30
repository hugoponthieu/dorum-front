import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from "../button/button.component";
import { PostsService } from '../posts.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  templateUrl: './edit-post.component.html',
  imports: [ReactiveFormsModule, ButtonComponent],
  providers: [PostsService]
})
export class EditPostComponent {
  topicId: string | null = null;
  postId: string | null = null;
  buttonTitle = "Send"
  pageTitle = ''
  isCreating = false
  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe(params => {
      this.topicId = params.get('id');
    });
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('postId');
    });
    this.isCreating = this.postId == null
    this.pageTitle = this.isCreating ? "Edit post" : "New post"
  }
  constructor(private router: Router, private route: ActivatedRoute, private postsService: PostsService,) {
  }
  content = new FormControl('')


  onCreatePost(): void {
    console.log("create")
    this.postsService.createPost(this.topicId ?? '1', { author: 'test', content: this.content.value ?? '' }).subscribe((data: Post) => {
      this.router.navigate(['/topic/' + this.topicId])
    }, error => {
      this.router.navigate(['/topic/' + this.topicId])
      console.error('Error creating post:', error);
    });
  }

}
