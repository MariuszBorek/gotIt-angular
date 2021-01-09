import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private httpClient: HttpClient) { }

  getUserData(): Observable<User> {
    const email = sessionStorage.getItem('username');
    const url = `http://localhost:8080/api/profile/${email}`;
    return this.httpClient.get<User>(url);
  }

}
