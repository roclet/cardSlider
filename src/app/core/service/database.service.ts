import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Login, Member, OfficeModel, StaffPost } from '../model/baseModels';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  offices: OfficeModel[] = [];
  apiBaseURL = environment.api;

  constructor(private firestore: AngularFirestore, private http: HttpClient) {}

  createNewOffice(office: OfficeModel) {
    return this.firestore.collection('Office').add(office);
  }

  getAllOffices() {
    return this.firestore.collection('Office').snapshotChanges();
  }

  getAllOfficeColor() {
    return this.firestore.collection('OfficeColor').snapshotChanges();
  }

  update_office(data: OfficeModel) {
    return this.firestore
      .collection('Office')
      .doc(data.id)
      .set(data, { merge: false });
  }

  delete(data: any, collectionName: string) {
    return this.firestore.collection(collectionName).doc(data.id).delete();
  }
  // Fetch Staff from office if staff is subcollection of office in firebase
  getStaffs(data: OfficeModel) {
    return this.firestore
      .collection('Office')
      .doc(data.id)
      .collection('Staff')
      .snapshotChanges();
  }
  // Add Staff from office if staff is subcollection of office in firebase
  addStaff(office: OfficeModel) {
    return this.firestore
      .collection('Office')
      .doc(office.id)
      .collection('Staff')
      .add(office);
  }

  getStaffOff(id: string) {
    return this.firestore
      .collection('Stuff', (ref) => ref.where('office_id', '==', id))
      .valueChanges();
  }

  createNewStuff(stuff: StaffPost) {
    return this.firestore.collection('Stuff').add(stuff);
  }

  update_staff(data: StaffPost) {
    return this.firestore
      .collection('Stuff')
      .doc(data.id)
      .set(data, { merge: false });
  }

  delete_staff(data: StaffPost) {
    return this.firestore.collection('Office').doc(data.id).delete();
  }

  login(requestBody: Login): Observable<Member> {
    return this.http.post<Member>(
      `${this.apiBaseURL}user/login`,
      JSON.stringify(requestBody)
    );
  }
}
