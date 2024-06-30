import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { ButtonComponent } from "../button/button.component";
import { Topic } from '../models/topic';
import { PostTableComponent } from "../post-table/post-table.component";
import { PostComponent } from "../post/post.component";
import { TopicsService } from '../topics.service';

@Component({
    selector: 'app-topic-screen',
    standalone: true,
    templateUrl: './topic-screen.component.html',
    imports: [PostTableComponent, PostComponent, RouterOutlet, RouterModule, ButtonComponent],
    providers: [TopicsService]
})
export class TopicScreenComponent {
    topicId: string | null = null;
    private route = inject(ActivatedRoute);
    buttonTitle = "New post"
    buttonEditTopicTitle = "Edit this topic"
    buttonHome = "Go home"
    ngOnInit(): void {
        this.topicId = (this.route.snapshot.paramMap.get('id'));
        this.topicsService.getTopicById(this.topicId ?? '1').subscribe((data: Topic) => {
            this.topic = data
            console.log(data);
        });

    }
    topic: Topic = {
        id: 0,
        owner: '',
        title: 'test',
        postcount: 0,
        updatedAt: new Date()
    }
    constructor(private router: Router, private topicsService: TopicsService) {
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
