import { createReducer, on } from '@ngrx/store'
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions';
import { User } from '../../models/user.model';


export interface UsersState {
    users: User[];
    loaded: boolean;
    error: any;
}

const initialState: UsersState = {
    users: [],
    loaded: false,
    error: null
}

const _usersReducer = createReducer(
    initialState,
    on(loadUsers, state => ({ ...state })),
    on(loadUsersSuccess, (state, { users }) => ({ ...state, loaded: true, users: [...users] })),
    on(loadUsersError, (state, { payload }) => ({ ...state, loaded: false, error: payload })),
)

export function usersReducer(state, action) {
    return _usersReducer(state, action);
}
