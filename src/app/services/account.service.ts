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
  private currentUserBearer!: string;

  constructor(private http: HttpClient, private router: Router) {}

  // set user
  public set userToken(token: string) {
    this.currentUserBearer = token;
  }

  // get user
  public get userToken(): string {
    return this.currentUserBearer;
  }

  // login
  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http
      .post(`${API}/login`, loginData)
      .pipe(catchError(this.handleError));
  }

  // logout
  logout() {
    return this.http.post(`${API}/logout`, {});
  }

  // register
  register(
    username: string,
    email: string,
    password: string,
    passwordConfirmation: string
  ) {
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
