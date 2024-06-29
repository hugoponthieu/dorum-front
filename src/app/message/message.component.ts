import { Component, Input } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
})
export class MessageComponent {
  @Input() message: Message = {
    author: '',
    content: '',
    id: '',
    date: ''
  };

  
}
