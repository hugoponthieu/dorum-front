import { Component } from '@angular/core';
import { PostTableComponent } from "../post-table/post-table.component";
import { MessageComponent } from "../message/message.component";
import { Message } from '../models/message';

@Component({
    selector: 'app-topic-screen',
    standalone: true,
    templateUrl: './topic-screen.component.html',
    imports: [PostTableComponent, MessageComponent]
})
export class TopicScreenComponent {
    message: Message = {
        id: "1231",
        content: "The best message you've ever seen so far",
        author: "me",
        date: "12-06-24"
      }
}
