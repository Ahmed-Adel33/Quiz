import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _HttpClient: HttpClient) {}
  onGetUserProfile(id: string): Observable<any> {
    return this._HttpClient.get(`admin/users/${id}`);
  }
}
