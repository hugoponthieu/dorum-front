import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-edit-post',
  standalone: true,
  templateUrl: './edit-post.component.html',
  imports: [ReactiveFormsModule, ButtonComponent]
})
export class EditPostComponent {
  topicId: string | null = null;
  postId: string | null = null;
  buttonTitle = "Send"
  pageTitle = ''
  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe(params => {
      this.topicId = params.get('id');
    });
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('postId');
    });
    this.pageTitle = this.postId == null ? "Edit post" : "New post"
  }
  constructor(private router: Router, private route: ActivatedRoute) {
  }
  content = new FormControl('')
  navigateTo() {
    this.router.navigate(['/topic/' + this.topicId])
  }
  onSubmit() {
    console.log(this.content.value)
    this.navigateTo()
  }
}
