import { createReducer, on } from '@ngrx/store'
import { loadUser, loadUserError, loadUserSuccess } from '../actions';
import { User } from '../../models/user.model';


export interface UserState {
    id: number;
    user: User;
    loaded: boolean;
    error: any;
}

const initialState: UserState = {
    id: 0,
    user: null,
    loaded: false,
    error: null
};

const _userReducer = createReducer(
    initialState,
    on(loadUser, (state, { id }) => ({ ...state, loading: true, id, error: null, user: null })),
    on(loadUserSuccess, (state, { user }) => ({ ...state, loaded: true, error: null, user: { ...user } })),
    on(loadUserError, (state, { payload }) => ({ ...state, loaded: false, error: payload })),
);

export function userReducer(state, action) {
    return _userReducer(state, action);
}
