import { Subscription } from 'rxjs';
export interface StaffPost {
  id?: string;
  title?: string;
  office_id: string;
  fullName: string;
}

export interface StaffGet {
  id?: string;
  office_id: string;
  firstname?: string;
  lastname?: string;
}

export interface OfficeColor {
  id?: string;
  description: string;
  name: string;
}

export interface SourcedSubscription {
  source: any;
  subscriptions: Subscription[];
}

export interface ConfirmationDialogData {
  title: string;
  text: string;
  confirmText: string;
  rejectText?: string;
  data?: any;
}

export interface OfficeModel {
  id?: string;
  office_name: string;
  office_email: string;
  office_tell: number;
  address: string;
  max_num_occupant: number;
  office_color: string;
  create_date?: string;
}

export interface Post {
  text: string;
  likes: number;
}

export interface Login {
  username: string;
  password: string;
}

export interface Member {
  boo: boolean;
  msg: string;
  token: string;
  user?:  Array<User>;
}

export interface User {
  Cellphone: string;
  Company: string;
  Date: string;
  Email: string;
  Firstname: string;
  Id: string;
  Lastname: string;
  OrgDateTime: string;
  Password: string;
  Profile: null;
  Status: string;
  Time: string;
}

export interface AppState {
  boo: boolean;
  msg: string;
  token: string;
  user: User;
}
