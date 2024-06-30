import { Component } from '@angular/core';
import { PostComponent } from "../post/post.component";
import { Post } from '../models/post';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-posts-screen',
    standalone: true,
    templateUrl: './posts-screen.component.html',
    imports: [PostComponent,],
    providers: [PostsService]
})
export class PostsScreenComponent {
    constructor(private postsService: PostsService, private route: ActivatedRoute, private router: Router) {

    }
    topicId: string | null = null;
    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.topicId = params.get('id');
        });
        this.postsService.getPostsByTopic(this.topicId ?? '1').subscribe((data: Post[]) => {
            this.posts = data;
            console.log(this.posts);
        });

    }

    deletePost(postId: number) {
        return () => this.postsService.deletePost(this.topicId ?? '1', postId.toString()).subscribe(() => {
            this.posts = this.posts.filter(post => post.id !== postId);
        }, error => {
            console.error('Error deleting post:', error);
        });

    }

    posts: Post[] = []
}
