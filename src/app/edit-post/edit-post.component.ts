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
  post: Post = {
    author: '',
    content: ''
  }
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
    this.pageTitle = this.isCreating ? "New post" : "Edit post"
    if (!this.isCreating) {
      this.postsService.getPostById(this.topicId ?? '1', this.postId ?? '1').subscribe((data: Post) => {
        this.post = data
      })
    }
  }
  constructor(private router: Router, private route: ActivatedRoute, private postsService: PostsService,) {
  }
  content = new FormControl(this.post.content)
  onSubmit() {
    if (this.isCreating) {
      this.onCreatePost()
    } else {
      this.onUpdate()
    }
  }

  onUpdate(): void {
    this.postsService.updatePost(this.topicId ?? '1', this.postId ?? '1', { author: this.post.author, content: this.content.value ?? '' }).subscribe((data: Post) => {
      this.router.navigate(['/topic/' + this.topicId])
    }, error => {
      this.router.navigate(['/topic/' + this.topicId])
      console.error('Error creating post:', error);
    });
  }

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
