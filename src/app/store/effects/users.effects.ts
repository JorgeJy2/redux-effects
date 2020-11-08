import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { loadUsers, loadUsersSuccess, loadUsersError } from '../actions/users.actions';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { of } from 'rxjs';


@Injectable()
export class UsersEffects {

    constructor(private actions$: Actions,
        private userService: UserService) { }

    loadUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadUsers),
            mergeMap(
                () => this.userService.getUsers().pipe(
                    tap(data => console.log('effect tap LOAD USER ', data)),
                    map((users: User[]) => loadUsersSuccess({users})),
                    catchError(error => of (loadUsersError({payload: error})))
                )
            )
        )
    );
}