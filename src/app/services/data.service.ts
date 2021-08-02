import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = 'https://peaceful-beyond-74495.herokuapp.com/api';

  constructor(private httpClient: HttpClient) {}

  public getProducts(): Observable<any> {
    return this.httpClient
      .get(this.REST_API_SERVER + '/products')
      .pipe(catchError(this.handleError));
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
