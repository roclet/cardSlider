import { User, Member } from './../../model/baseModels';
import { createReducer, on } from '@ngrx/store';
import * as memberActions from './auth.actions';

export const authFeatureKey = 'auth';
const user = {
    boo: false, 
    msg: '', 
    token: ''
  };

export interface State {
    user: Member;
}

export const initialState: State ={
    user
};

export const userReducer =  createReducer(
    initialState,
    on(memberActions.LoginUserSucess, (state, {...payload}) => {
        return {...state, user: payload.user}
    })
)