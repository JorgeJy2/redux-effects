
import { createReducer, on } from '@ngrx/store';
import { isLoading, stopLoading } from '../actions/ui.actions';

export interface UiState {
    isLoading: boolean;
}

const initialState: UiState = {
    isLoading: false
}

const _uiReducer = createReducer(initialState,
    on(isLoading, (state) => ({ isLoading: true })),
    on(stopLoading, (state) => ({ isLoading: false }))
);

export function iuReducer(state, action) {
    return _uiReducer(state, action);
}
