import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3333/auth';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    const user = JSON.parse(localStorage.getItem('current_user') ?? '{}');
    this.currentUserSubject = new BehaviorSubject<any>(user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  signin(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signin`, credentials).pipe(
      tap(response => this.handleAuthentication(response))
    );
  }

  signup(data: { name: string, email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signup`, data).pipe(
      tap(response => this.handleAuthentication(response))
    );
  }

  private handleAuthentication(response: any): void {
    localStorage.setItem('auth_token', response.token);
    localStorage.setItem('current_user', JSON.stringify(response.user));
    this.currentUserSubject.next(response.user);
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('current_user');
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  getUserRights(): any {
    return this.currentUserValue?.rights || [];
  }

  hasRight(right: string): boolean {
    return this.getUserRights().includes(right);
  }
}
