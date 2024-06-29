import { Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { TopicScreenComponent } from './topic-screen/topic-screen.component';
import { PostsScreenComponent } from './posts-screen/posts-screen.component';
import { EditMessageComponent } from './edit-message/edit-message.component';
import { EditTopicScreenComponent } from './edit-topic-screen/edit-topic-screen.component';

export const routes: Routes = [
    { path: 'topic', component: HomeScreenComponent },
    { path: 'topic/create', component: EditTopicScreenComponent },
    {
        path: 'topic/:id', component: TopicScreenComponent, children: [
            { path: 'edit', component: EditTopicScreenComponent },
            { path: '', component: PostsScreenComponent },
            { path: 'message/:messageId', component: EditMessageComponent, },
            { path: 'message', component: EditMessageComponent }
        ]
    }
];
