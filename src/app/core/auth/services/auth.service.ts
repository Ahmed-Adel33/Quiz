import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin, IReset } from '../models/i-auth';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role:string |null=''

  constructor(private _httpClient:HttpClient) {
    if (localStorage.getItem('userToken')!== null) {
      this.getUserToken()
    }
   }
  getUserToken(){
    let encoded:any=localStorage.getItem('userToken');
    let decoded=jwtDecode(encoded)
    console.log(decoded);
    
    localStorage.setItem('role',encoded.role);
    localStorage.setItem('userName',encoded.userName);
    this.getRole()
   }
getRole(){
  if (localStorage.getItem('userToken')!== null&&localStorage.getItem('role')) {
    this.role=localStorage.getItem('role')
  }
}
    onLogin(data: ILogin): Observable<any> {
    return this._httpClient.post('portal/users/login', data);
  }
  onForgetPassword(data: string): Observable<any> {
    return this._httpClient.post('portal/users/forgot-password ', {
      email: data,
    });
    
  }

  onResetPassword(data: IReset): Observable<any> {
    return this._httpClient.post('portal/users/reset-password', data);

  }
}
