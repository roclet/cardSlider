import { Member } from './../../model/baseModels';
import { createAction, props } from '@ngrx/store';
import { Login } from '../../model/baseModels';

export const ReqUserLogin = createAction(
  '[Login] ReqUserLogin',
  props<{ login: Login }>()
);
export const LoginUserFail = createAction('[ReqUserLogin] UserLoginFail');
export const LoginUserSucess = createAction(
  '[ReqUserLogin] LoginUserSucess',
  props<{ user: Member }>()
);
