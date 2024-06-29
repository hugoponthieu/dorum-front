import { Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { TopicScreenComponent } from './topic-screen/topic-screen.component';
import { PostsScreenComponent } from './posts-screen/posts-screen.component';

export const routes: Routes = [
    { path: 'home', component: HomeScreenComponent },
    {
        path: 'topic', component: TopicScreenComponent, children: [
            { path: ':id', component: PostsScreenComponent }

        ]
    }
];
