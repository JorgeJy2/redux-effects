import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly URL_ROOT: string = 'https://reqres.in/api/users';
  readonly USER_PER_PAGE: number = 6;

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(`${this.URL_ROOT}?per_page=${this.USER_PER_PAGE}&delay=5`).pipe(
      map(responseUser => responseUser['data']),
    );
  }

  getUserById(id: number) {
    return this.http.get<User>(`${this.URL_ROOT}/${id}`).pipe(
      tap(console.log),
      map(responseUser => responseUser['data']),
    );
  }
}
