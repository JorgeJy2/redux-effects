import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadUsers = createAction('[USERS] loadUsers');
export const loadUsersSuccess = createAction('[USERS] loadUsersSuccess',
    props<{ users: User[] }>());
export const loadUsersError = createAction('[USERS] loadUsersError',
    props<{ payload: any }>());
