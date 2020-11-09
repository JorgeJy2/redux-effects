import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { loadUser, loadUserSuccess, loadUserError } from '../actions/user.actions';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { stopLoading, isLoading } from '../actions/ui.actions';

@Injectable()
export class UserEffects {

    constructor(private actions$: Actions,
                private userService: UserService,
                private store: Store<AppState>) { }

    loadUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadUser),
            tap(() => this.store.dispatch(isLoading())),
            mergeMap(
                (action) => this.userService.getUserById(action.id).pipe(
                    map((user: User) => {
                        this.store.dispatch(stopLoading());
                        return loadUserSuccess({ user });
                    }),
                    catchError(error => {
                        this.store.dispatch(stopLoading());
                        return of(loadUserError({ payload: error }));
                    })
                )
            )
        )
    );
}
