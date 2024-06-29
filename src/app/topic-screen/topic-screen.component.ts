import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { MessageComponent } from "../message/message.component";
import { Topic } from '../models/topic';
import { PostTableComponent } from "../post-table/post-table.component";

@Component({
    selector: 'app-topic-screen',
    standalone: true,
    templateUrl: './topic-screen.component.html',
    imports: [PostTableComponent, MessageComponent, RouterOutlet, RouterModule]
})
export class TopicScreenComponent {
    private route = inject(ActivatedRoute);
    ngOnInit(): void {
        const id = (this.route.snapshot.paramMap.get('id'));
        console.log(id)
    }
    topic: Topic = {
        id: 0,
        name: 'Le royal pouleto',
        numberOfPosts: 0,
        lastPostDate: ''
    }

}
