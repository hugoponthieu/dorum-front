import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:3333/auth';

  constructor(private http: HttpClient) { }

  signin(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signin`, credentials).pipe(
      tap(response => this.storeToken(response.token))
    );
  }

  signup(data: { name: string, email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signup`, data)
  }

  private storeToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('auth_token');
  }
}
