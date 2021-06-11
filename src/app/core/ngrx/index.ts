
import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import * as fromAuth from './auth/auth.reducer';
// import * as fromOffice from './office'


export interface State {
    auth: fromAuth.State;
}


export const reducers: ActionReducerMap<State> = {
    auth: fromAuth.userReducer,
}

export const getAuthState = createFeatureSelector<State, fromAuth.State>(fromAuth.authFeatureKey);