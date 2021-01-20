import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from '../interface/UserDTO';
import { Observable } from 'rxjs';
import { PurchaseDTO } from '../interface/PurchaseDTO';
import { AuctionDTO } from '../interface/AuctionDTO';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  email = sessionStorage.getItem('username');

  constructor(private httpClient: HttpClient) { }

  getUserData(): Observable<UserDTO> {
    const url = `http://localhost:8080/api/profile/${this.email}`;
    return this.httpClient.get<UserDTO>(url);
  }

  findWonAuctions(): Observable<PurchaseDTO[]> {
    const url = `http://localhost:8080/api/purchased/${this.email}`;
    return this.httpClient.get<PurchaseDTO[]>(url);
  }

  findWatchedAuctions(): Observable<AuctionDTO[]>  {
    const url = `http://localhost:8080/api/watched-auctions/${this.email}`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  updateData(userDTO: UserDTO): Observable<UserDTO> {
    const url = `http://localhost:8080/api/update-user-data/${this.email}`;
    return this.httpClient.post<UserDTO>(url, userDTO);
  }



}
