import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { loadUser, loadUserSuccess, loadUserError } from '../actions/user.actions';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { of } from 'rxjs';


@Injectable()
export class UserEffects {

    constructor(private actions$: Actions,
        private userService: UserService) { }

    loadUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadUser),
            mergeMap(
                (action) => this.userService.getUserById(action.id).pipe(
                    tap(data => console.log('effect tap LOAD USER ', data)),
                    map((user: User) => loadUserSuccess({ user })),
                    catchError(error => of(loadUserError({ payload: error })))
                )
            )
        )
    );
}
