import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(user: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/signup', user);
  }

  signin(user: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/signin', user);
  }
  getUser():Observable<any>{
    return this.http.get<any>(`http://localhost:3000/api/user`);
  }
  getUserById(id:string | number):Observable<IUser>{
    return this.http.get<IUser>(`http://localhost:3000/api/user/${id}`);
  }
  removeUser(id:number):Observable<IUser>{
    return this.http.delete<IUser>(`http://localhost:3000/api/user/${id}`)
  }
  isAuthenticated() {
    return JSON.parse(localStorage.getItem('userInfo') || '{}');
  }
}
