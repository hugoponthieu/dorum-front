import { Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { TopicScreenComponent } from './topic-screen/topic-screen.component';
import { PostsScreenComponent } from './posts-screen/posts-screen.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { EditTopicScreenComponent } from './edit-topic-screen/edit-topic-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'signin', component: LoginScreenComponent },
    { path: 'signup', component: LoginScreenComponent },
    { path: 'topic', component: HomeScreenComponent, canActivate: [authGuard] },
    { path: 'topic/create', component: EditTopicScreenComponent, canActivate: [authGuard] },
    {
        path: 'topic/:id',
        component: TopicScreenComponent,
        canActivate: [authGuard],
        children: [
            { path: 'edit', component: EditTopicScreenComponent, canActivate: [authGuard] },
            { path: '', component: PostsScreenComponent, canActivate: [authGuard] },
            { path: 'post/:postId', component: EditPostComponent, canActivate: [authGuard] },
            { path: 'post', component: EditPostComponent, canActivate: [authGuard] }
        ]
    }
];
