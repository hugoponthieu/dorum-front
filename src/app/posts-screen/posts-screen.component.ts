import { Component } from '@angular/core';
import { PostComponent } from "../post/post.component";
import { Post } from '../models/post';

@Component({
    selector: 'app-posts-screen',
    standalone: true,
    templateUrl: './posts-screen.component.html',
    imports: [PostComponent]
})
export class PostsScreenComponent {
    post: Post = {
        id: "1231",
        content: "The best post you've ever seen so far",
        author: "me",
        date: "12-06-24"
    }
}
