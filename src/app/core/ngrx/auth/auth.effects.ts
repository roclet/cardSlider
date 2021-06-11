import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { authActions } from '../../actions';
import { Login } from '../../model/baseModels';
import { OfficeService } from '../../service/office.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,private serviceoffice: OfficeService) {}
  //#region  ReqUserLogin
  ReqUserLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.ReqUserLogin),
      mergeMap((payload) => {
        return of(payload).pipe(
            mergeMap((_payload) => {
                return this.serviceoffice.login(payload.login)
            }),
            mergeMap((user) => {
                console.log('xxxxxxxxxxxxxxxxxxxxxxx', user.user);
                return [authActions.LoginUserSucess({ user })];
            })
        )
      })
    )
  );
}
