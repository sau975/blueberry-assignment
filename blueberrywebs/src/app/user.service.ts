import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://appgames.cloudtevent.com/api/';

  constructor(private http: HttpClient) { }
    
  public Login(login: Login): Observable<any> {
    return this.http.post<any>(this.url + "auth/login", login);
  }

  public getUsers(): Observable<any> {
    return this.http.get<any>(this.url + "v1/users");
  }

  public Logout(): Observable<any> {
    return this.http.get<any>(this.url + "v1/users/logout");
  }

  getAuthStatus(){
    var token = localStorage.getItem('token');
    if(token){
      return true
    }else{
      return false
    }
  }
}
