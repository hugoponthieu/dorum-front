import { Component } from '@angular/core';
import { PostTableComponent } from '../post-table/post-table.component';
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-home-screen',
    standalone: true,
    templateUrl: './home-screen.component.html',
    imports: [PostTableComponent, ButtonComponent]
})
export class HomeScreenComponent {
  buttonCreateTopicTitle = "Create new topic"
  navigateToCreateTopic(){
    console.log("test")
  }
}
