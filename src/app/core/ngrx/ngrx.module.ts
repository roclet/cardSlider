import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthEffects } from './auth/auth.effects';
import { reducers } from '.';
import { State } from './index';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AuthEffects]),
  ],
  // providers: [{multi: true, deps: [Store],}],
  exports: [StoreModule, StoreDevtoolsModule, EffectsModule],
})
export class NgrxModule {}
