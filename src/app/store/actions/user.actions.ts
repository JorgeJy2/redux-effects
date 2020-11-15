import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadUser = createAction('[USER] loadUser',
    props<{ id: number }>());
export const loadUserSuccess = createAction('[USER] loadUserSuccess',
    props<{ user: User}>());
export const loadUserError = createAction('[USER] loadUserError',
    props<{ payload: any }>());
