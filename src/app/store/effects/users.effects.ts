import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { loadUsers, loadUsersSuccess, loadUsersError } from '../actions/users.actions';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { isLoading, stopLoading } from '../actions/ui.actions';

@Injectable()
export class UsersEffects {

    constructor(private actions$: Actions,
                private userService: UserService,
                private store: Store<AppState>) { }

    loadUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadUsers),
            tap(() => this.store.dispatch(isLoading())),
            mergeMap(
                () => this.userService.getUsers().pipe(
                    map((users: User[]) => {
                        this.store.dispatch(stopLoading());
                        return loadUsersSuccess({ users });
                    }),
                    catchError(error => {
                        this.store.dispatch(stopLoading());
                        return of(loadUsersError({ payload: error }));
                    })
                )
            )
        )
    );
}
