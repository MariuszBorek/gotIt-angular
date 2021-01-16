import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../interface/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }

  public createUser(userDTO) {
    return this.httpClient.post<UserDTO>("http://localhost:8080/api/create", userDTO);
  }

  findImage(imageName: string): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/image/get/${imageName}`);
  }

}
