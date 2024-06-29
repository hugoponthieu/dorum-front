import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from "../button/button.component";
import { Post } from '../models/post';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  imports: [ ButtonComponent],
  providers: [PostsService]
})
export class PostComponent {
  @Input()
  deletePost!: () => {};
  @Input() post:Post  = {
    author: '',
    content: '',
    id: 0,
    udpatedAt: ''
  };
  topicId: string | null = null;
  delete = "Delete this post"
  edit = "Edit this post"
  constructor(private router: Router, private route: ActivatedRoute,private postsService: PostsService) {
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.topicId = params.get('id');
    });
  }

  toEditScreen() {
    this.router.navigate(['/topic/' + this.topicId + '/post/' + this.post.id])
  }


}
