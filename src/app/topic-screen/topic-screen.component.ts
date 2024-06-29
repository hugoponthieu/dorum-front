import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { ButtonComponent } from "../button/button.component";
import { Topic } from '../models/topic';
import { PostTableComponent } from "../post-table/post-table.component";
import { PostComponent } from "../post/post.component";

@Component({
    selector: 'app-topic-screen',
    standalone: true,
    templateUrl: './topic-screen.component.html',
    imports: [PostTableComponent, PostComponent, RouterOutlet, RouterModule, ButtonComponent]
})
export class TopicScreenComponent {
    topicId: string | null = null;
    private route = inject(ActivatedRoute);
    buttonTitle = "New post"
    buttonEditTopicTitle = "Edit this topic"
    buttonHome = "Go home"
    ngOnInit(): void {
        this.topicId = (this.route.snapshot.paramMap.get('id'));
    }
    topic: Topic = {
        id: 0,
        title: 'Le royal pouleto',
        numberOfPosts: 0,
        lastPostDate: ''
    }
    constructor(private router: Router) {
    }
    navigateToNewPost() {
        this.router.navigate(['/topic/' + this.topicId + '/post'])
    }
    navigateToEditTopic() {
        this.router.navigate(['/topic/' + this.topicId + '/edit'])
    }
    navigateToHome() {
        this.router.navigate(['/topic/'])
    }

}
