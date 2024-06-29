import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-message',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-message.component.html',
})
export class EditMessageComponent {
  topicId: string | null = null;
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
