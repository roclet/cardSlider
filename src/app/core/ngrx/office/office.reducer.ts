import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { OfficeModel } from '../../model/baseModels';
import * as OfficeActions from './office.action';

export const officesKey = 'office';

// export interface State {
//   office: OfficeModel | null;
//   selectedOffice: OfficeModel | null;
// }
// export const initialState: State = {
//   office: null,
//   selectedOffice: null,
// };

// export const reducer = createReducer(
//     initialState,
//     on(OfficeActions.CreateOfficeSuccess, (state, payload) => {
//         return { ...state, selectedOffice: payload.offices };
//     })
// );
// export interface State extends EntityState<OfficeModel> {}
// export const adapter: EntityAdapter<OfficeModel> =
//   createEntityAdapter<OfficeModel>();
// export const initialState: State = adapter.getInitialState();

// export const reducer = createReducer(
//   initialState,
//   on(OfficeActions.CreateOfficeSuccess, (state, payload) => {
//     return adapter.updateMany(payload.office, state);
//   })
// );
