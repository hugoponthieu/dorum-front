import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-edit-topic-screen',
    standalone: true,
    templateUrl: './edit-topic-screen.component.html',
    imports: [ReactiveFormsModule,ButtonComponent]
})
export class EditTopicScreenComponent {
  topicId: string | null = null;
  buttonTitle = "Create"
  pageTitle= ''
  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe(params => {
      this.topicId = params.get('id');
    });
    this.pageTitle = this.topicId == null ? "New topic":"Edit topic"
  }
  constructor(private router: Router, private route: ActivatedRoute) {
  }
  title = new FormControl('')
  navigateTo() {
    this.router.navigate(['/topic/'+this.topicId])
  }
  onSubmit() {
    console.log(this.title.value)
    this.navigateTo()
  }
}
