import { Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { TopicScreenComponent } from './topic-screen/topic-screen.component';

export const routes: Routes = [
    { path: 'home', component: HomeScreenComponent },
    { path: 'topic/:id', component: TopicScreenComponent }
];
