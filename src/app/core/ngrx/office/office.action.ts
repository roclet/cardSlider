import { createAction, props } from '@ngrx/store';
import { OfficeModel } from '../../model/baseModels';

//#region Create Office
export const PostCreateOffice = createAction(
  '[Create Office] PostCreateOffice',
  props<{ office: OfficeModel }>()
);
export const CreateOfficeFail = createAction(
  '[ReqCreateBusiness] CreateOfficeFail'
);
export const CreateOfficeSuccess = createAction(
  '[PostCreateOffice] CreateBusinessSuccess',
  props<{ offices: OfficeModel }>()
);
//#endregion
