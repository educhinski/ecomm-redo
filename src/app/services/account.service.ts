import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const API = 'https://peaceful-beyond-74495.herokuapp.com/api';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient, private router: Router) {}

  // set user
  public set userToken(token: string) {
    localStorage.setItem('token', token);
  }

  // get user
  public get userToken(): string {
    return localStorage.getItem('token') || '';
  }

  // login
  login(email: string, password: string): Observable<any> {
    return this.http
      .post(`${API}/login`, { email, password }, { responseType: 'text' })
      .pipe(catchError(this.handleError));
  }

  // logout
  logout(): Observable<any> {
    return this.http.post(`${API}/logout`, {});
  }

  // register
  register(
    username: string,
    email: string,
    password: string,
    passwordConfirmation: string
  ): Observable<any> {
    return this.http.post(`${API}/register`, {
      name: username,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
    });
  }

  // handle error
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}
