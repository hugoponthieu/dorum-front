import { Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { TopicScreenComponent } from './topic-screen/topic-screen.component';
import { PostsScreenComponent } from './posts-screen/posts-screen.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { EditTopicScreenComponent } from './edit-topic-screen/edit-topic-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

export const routes: Routes = [
    { path: 'signin', component: LoginScreenComponent },
    { path: 'signup', component: LoginScreenComponent },
    { path: 'topic', component: HomeScreenComponent },
    { path: 'topic/create', component: EditTopicScreenComponent },
    {
        path: 'topic/:id', component: TopicScreenComponent, children: [
            { path: 'edit', component: EditTopicScreenComponent },
            { path: '', component: PostsScreenComponent },
            { path: 'post/:postId', component: EditPostComponent, },
            { path: 'post', component: EditPostComponent }
        ]
    }
];
