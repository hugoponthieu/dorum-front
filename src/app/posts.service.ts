import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseUrl = 'http://localhost:3333/topics';

  constructor(private http: HttpClient) { }

  getPostsByTopic(topicId: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/${topicId}/posts`);
  }

  getPostById(topicId: string, postId: string): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/${topicId}/posts/${postId}`);
  }

  createPost(topicId: string, post: Partial<Post>): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}/${topicId}/posts`, post);
  }

  updatePost(topicId: string, postId: string, post: Partial<Post>): Observable<Post> {
    return this.http.put<Post>(`${this.baseUrl}/${topicId}/posts/${postId}`, post);
  }

  deletePost(topicId: string, postId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${topicId}/posts/${postId}`);
  }
}
