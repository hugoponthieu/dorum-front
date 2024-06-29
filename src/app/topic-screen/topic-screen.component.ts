import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { MessageComponent } from "../message/message.component";
import { Topic } from '../models/topic';
import { PostTableComponent } from "../post-table/post-table.component";
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-topic-screen',
    standalone: true,
    templateUrl: './topic-screen.component.html',
    imports: [PostTableComponent, MessageComponent, RouterOutlet, RouterModule, ButtonComponent]
})
export class TopicScreenComponent {
    topicId: string | null = null;
    private route = inject(ActivatedRoute);
    buttonTitle = "New post"
    buttonEditTopicTitle = "Edit this topic"
    ngOnInit(): void {
        this.topicId = (this.route.snapshot.paramMap.get('id'));
    }
    topic: Topic = {
        id: 0,
        name: 'Le royal pouleto',
        numberOfPosts: 0,
        lastPostDate: ''
    }
    constructor(private router: Router) {
    }
    navigateToNewPost() {
        console.log("navigate to message")
        this.router.navigate(['/topic/'+this.topicId+'/message'])
    }
    navigateToEditTopic(){

    }
}
