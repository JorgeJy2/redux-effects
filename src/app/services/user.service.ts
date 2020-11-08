import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly URL_ROOT: string = 'https://reqres.in/api/users';
  readonly USER_PER_PAGE: number = 6;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.URL_ROOT}?per_page=${this.USER_PER_PAGE}`).pipe(
      map(responseUser => responseUser['data']),
      catchError(err => {
        console.error(err);
        if (err.status === 404) {
          throw new Error('404 NOT FOUND');
        }
        throw new Error('EROR SERVICE unknown');
      }),
    );
  }
}
