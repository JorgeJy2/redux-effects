import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducer';

export interface AppState {
    users: reducers.UsersState,
    user: reducers.UserState,
    ui: reducers.UiState
}

export const appReducers: ActionReducerMap<AppState> = {
    users: reducers.usersReducer,
    user: reducers.userReducer,
    ui: reducers.iuReducer
}
