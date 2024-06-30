import { Component } from '@angular/core';
import { PostTableComponent } from '../post-table/post-table.component';
import { ButtonComponent } from "../button/button.component";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-home-screen',
    standalone: true,
    templateUrl: './home-screen.component.html',
    imports: [PostTableComponent, ButtonComponent]
})
export class HomeScreenComponent {
  constructor(private router: Router){}

  buttonCreateTopicTitle = "Create new topic"
  navigateToCreateTopic(){
    this.router.navigate(['/topic/create'])
  }
}
