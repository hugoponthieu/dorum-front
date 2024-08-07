import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseUrl = 'http://localhost:3333/topics';

  constructor(private http: HttpClient) { }

  private getHeaders() {
    const token = localStorage.getItem('auth_token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getPostsByTopic(topicId: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/${topicId}/posts`, { headers: this.getHeaders() });
  }

  getPostById(topicId: string, postId: string): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/${topicId}/posts/${postId}`, { headers: this.getHeaders() });
  }

  createPost(topicId: string, post: Partial<Post>): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}/${topicId}/posts`, post, { headers: this.getHeaders() });
  }

  updatePost(topicId: string, postId: string, post: Partial<Post>): Observable<Post> {
    return this.http.put<Post>(`${this.baseUrl}/${topicId}/posts/${postId}`, post, { headers: this.getHeaders() });
  }

  deletePost(topicId: string, postId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${topicId}/posts/${postId}`, { headers: this.getHeaders() });
  }
}
