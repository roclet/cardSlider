import { Injectable } from '@angular/core';
import { Login, Member, OfficeColor, OfficeModel } from '../model/baseModels';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatabaseService } from './database.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { take, timeout, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class OfficeService {
  offices: OfficeModel[] = [];
  officecolor: OfficeColor[] = [];
  offices$ = new BehaviorSubject<OfficeModel[]>([]);
  officecolor$ = new BehaviorSubject<OfficeColor[]>([]);
  apiBaseURL = environment.api;
  constructor(
    private db: DatabaseService,
    private _snackBar: MatSnackBar,
    private http: HttpClient
  ) {}

  init() {
    this.GetOffice();
    this.getOfficeColor();
  }

  getOfficeColor() {
    this.db.getAllOfficeColor().subscribe((data) => {
      this.officecolor = data.map((dataOut) => {
        return {
          id: dataOut.payload.doc.id,
          ...(dataOut.payload.doc.data() as {}),
        } as OfficeColor;
      });
      this.officecolor$.next(this.officecolor);
    });
  }

  GetOffice() {
    this.db.getAllOffices().subscribe((data) => {
      this.offices = data.map((dataOut) => {
        return {
          id: dataOut.payload.doc.id,
          ...(dataOut.payload.doc.data() as {}),
        } as OfficeModel;
      });
      this.offices$.next(this.offices);
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  login(requestBody: Login): Observable<Member> {
    return this.http
      .post<Member>(`${this.apiBaseURL}user/login`, requestBody)
      .pipe(timeout(6000), take(1));
  }
}
