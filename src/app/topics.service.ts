import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from './models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  private baseUrl = 'http://localhost:3333/topics';

  constructor(private http: HttpClient) { }

  private getHeaders() {
    const token = localStorage.getItem('auth_token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getAllTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this.baseUrl}`, { headers: this.getHeaders() });
  }

  getTopicById(topicId: string): Observable<Topic> {
    return this.http.get<Topic>(`${this.baseUrl}/${topicId}`, { headers: this.getHeaders() });
  }

  createTopic(topic: Partial<Topic>): Observable<Topic> {
    return this.http.post<Topic>(`${this.baseUrl}`, topic, { headers: this.getHeaders() });
  }

  updateTopic(topicId: string, topic: Partial<Topic>): Observable<Topic> {
    return this.http.put<Topic>(`${this.baseUrl}/${topicId}`, topic, { headers: this.getHeaders() });
  }

  deleteTopic(topicId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${topicId}`, { headers: this.getHeaders() });
  }
}
