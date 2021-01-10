import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from '../interface/UserDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private httpClient: HttpClient) { }

  getUserData(): Observable<UserDTO> {
    const email = sessionStorage.getItem('username');
    const url = `http://localhost:8080/api/profile/${email}`;
    return this.httpClient.get<UserDTO>(url);
  }

}
