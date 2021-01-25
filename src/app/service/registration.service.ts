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
    return this.httpClient.post<UserDTO>("https://gotit-backend.herokuapp.com/api/create", userDTO);
  }

  findImage(imageName: string): Observable<any> {
    return this.httpClient.get<any>(`https://gotit-backend.herokuapp.com/image/get/${imageName}`);
  }

}
