import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TopicsService } from '../topics.service';
import { Topic } from '../models/topic';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-edit-topic-screen',
  standalone: true,
  templateUrl: './edit-topic-screen.component.html',
  imports: [ReactiveFormsModule, ButtonComponent],
  providers: [TopicsService]
})
export class EditTopicScreenComponent implements OnInit {
  topicId: string | null = null;
  topic: Topic = {
    id: 0,
    title: '',
    owner: '',
    postcount: 0,
    updatedAt: new Date()
  }
  buttonTitle = "Create"
  pageTitle = ''
  isCreating = false
  title = new FormControl('')

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private topicService: TopicsService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe(params => {
      this.topicId = params.get('id');
    });

    this.isCreating = this.topicId == null
    this.pageTitle = this.isCreating ? "New topic" : "Edit topic"
    this.buttonTitle = this.isCreating ? "Create" : "Update"
    if (!this.isCreating) {
      this.topicService.getTopicById(this.topicId ?? '1').subscribe((data: Topic) => {
        this.topic = data
      });
    }
  }

  navigateTo() {
    this.router.navigate(['/topic/' + this.topicId])
  }

  onSubmit() {
    if (this.isCreating) {
      this.onCreate()
    } else {
      this.onUpdate()
    }
  }

  onUpdate(): void {
    this.topicService.updateTopic(this.topicId ?? '1', { title: this.title.value ?? '' }).subscribe((data: Topic) => {
      this.router.navigate(['/topic/' + this.topicId])
    }, error => {
      this.router.navigate(['/topic/' + this.topicId])
      console.error('Error updating topic:', error);
    });
  }

  onCreate(): void {
    const currentUser = this.authenticationService.currentUserValue;
    this.topicService.createTopic({ owner: currentUser, title: this.title.value ?? '' }).subscribe((data: Topic) => {
      this.router.navigate(['/topic'])
    }, error => {
      this.router.navigate(['/topic'])
      console.error('Error creating topic:', error);
    });
  }
}
