import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-message',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-message.component.html',
})
export class EditMessageComponent {
    content= new FormControl('')
  onSubmit(){
    console.log(this.content.value)
  }
}
