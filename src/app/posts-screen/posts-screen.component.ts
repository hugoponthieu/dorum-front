import { Component } from '@angular/core';
import { MessageComponent } from "../message/message.component";
import { Message } from '../models/message';

@Component({
    selector: 'app-posts-screen',
    standalone: true,
    templateUrl: './posts-screen.component.html',
    imports: [MessageComponent]
})
export class PostsScreenComponent {
    message: Message = {
        id: "1231",
        content: "The best message you've ever seen so far",
        author: "me",
        date: "12-06-24"
    }
}
