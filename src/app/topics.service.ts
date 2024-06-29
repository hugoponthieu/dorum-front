import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from './models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  private baseUrl = 'http://localhost:3333/topics';

  constructor(private http: HttpClient) { }

  getAllTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this.baseUrl}`);
  }

  getTopicById(topicId: string): Observable<Topic> {
    return this.http.get<Topic>(`${this.baseUrl}/${topicId}`);
  }

  createTopic(topic: Partial<Topic>): Observable<Topic> {
    return this.http.post<Topic>(`${this.baseUrl}`, topic);
  }

  updateTopic(topicId: string, topic: Partial<Topic>): Observable<Topic> {
    return this.http.put<Topic>(`${this.baseUrl}/${topicId}`, topic);
  }

  deleteTopic(topicId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${topicId}`);
  }
}
