import { Component } from '@angular/core';
import { PostTableComponent } from "../post-table/post-table.component";

@Component({
    selector: 'app-topic-screen',
    standalone: true,
    templateUrl: './topic-screen.component.html',
    imports: [PostTableComponent]
})
export class TopicScreenComponent {

}
