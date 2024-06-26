import { Component } from '@angular/core';
import { PostTableComponent } from '../post-table/post-table.component';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [PostTableComponent],
  templateUrl: './home-screen.component.html',
})
export class HomeScreenComponent {
  list = [1, 4]
}
