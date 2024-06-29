import { Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { TopicScreenComponent } from './topic-screen/topic-screen.component';
import { PostsScreenComponent } from './posts-screen/posts-screen.component';
import { EditMessageComponent } from './edit-message/edit-message.component';

export const routes: Routes = [
    { path: 'home', component: HomeScreenComponent },
    {
        path: 'topic/:id', component: TopicScreenComponent, children: [
            { path: '', component: PostsScreenComponent },
            { path: 'message/:messageId', component: EditMessageComponent,  }
        ]
    }
];
