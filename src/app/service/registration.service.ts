import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../interface/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  baseUrl = 'https://gotit-backend.herokuapp.com';
  // baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public createUser(userDTO) {
    return this.httpClient.post<UserDTO>(`${this.baseUrl}/api/create`, userDTO);
  }

  findImage(imageName: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/image/get/${imageName}`);
  }

}
