import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-edit-message',
    standalone: true,
    templateUrl: './edit-message.component.html',
    imports: [ReactiveFormsModule, ButtonComponent]
})
export class EditMessageComponent {
  topicId: string | null = null;
  messageId: string | null = null;
  buttonTitle = "Send"
  pageTitle= ''
  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe(params => {
      this.topicId = params.get('id');
    });
    this.route.paramMap.subscribe(params => {
      this.messageId = params.get('messageId');
    });
    this.pageTitle = this.messageId == null ? "Edit post":"New post"
  }
  constructor(private router: Router, private route: ActivatedRoute) {
  }
  content = new FormControl('')
  navigateTo() {
    this.router.navigate(['/topic/'+this.topicId])
  }
  onSubmit() {
    console.log(this.content.value)
    this.navigateTo()
  }
}
