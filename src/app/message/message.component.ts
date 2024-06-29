import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from "../button/button.component";
import { Message } from '../models/message';
@Component({
  selector: 'app-message',
  standalone: true,
  templateUrl: './message.component.html',
  imports: [MatIconModule, ButtonComponent]
})
export class MessageComponent {
  @Input() messageId = '1';
  topicId: string | null = null;
  delete = "Delete this post"
  edit = "Edit this post"
  constructor(private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.topicId = params.get('id');
    });
  }

  toEditScreen() {
    this.router.navigate(['/topic/' + this.topicId + '/message/' + this.messageId])
  }
  deletePost(){
    console.log(this.messageId)
  }

  @Input() message: Message = {
    author: '',
    content: '',
    id: '',
    date: ''
  };
}
