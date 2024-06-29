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
  buttonTitle = "Send"
  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe(params => {
      this.topicId = params.get('id');
    });
    console.log(this.topicId)
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
