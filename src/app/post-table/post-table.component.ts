import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Topic } from '../models/topic';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'app-post-table',
  standalone: true,
  imports: [RouterLink,],
  providers: [TopicsService,],
  templateUrl: './post-table.component.html',
})
export class PostTableComponent {
  topics: Topic[] = []
  constructor(private router: Router, private topicsService: TopicsService,) {
  }
  ngOnInit(): void {
    this.topicsService.getAllTopics().subscribe((data: Topic[]) => {
      this.topics = data;
      console.log(this.topics);
    });
  }
  navigateTo(topic: any) {
    this.router.navigate(['/topic/' + topic.id])
  }
}
