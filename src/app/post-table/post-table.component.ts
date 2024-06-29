import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-table.component.html',
})
export class PostTableComponent {
  constructor(private router: Router) {
  }

  topics = ([
    { id: 1, name: 'Introduction to Angular', numberOfPosts: 10, lastPostDate: new Date('2024-01-15').toDateString() },
    { id: 2, name: 'Advanced TypeScript', numberOfPosts: 5, lastPostDate: new Date('2024-02-20').toDateString() },
    { id: 3, name: 'RxJS in Depth', numberOfPosts: 8, lastPostDate: new Date('2024-03-05').toDateString() },
  ]);
  displayedColumns: string[] = ['name', 'numberOfPosts', 'lastPostDate'];


  navigateTo(topic: any) {
    this.router.navigate(['/topic/' + topic.id])
    // You can add any other action you want to perform on row click here
  }
}
