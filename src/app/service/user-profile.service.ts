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

  baseUrl = 'http://localhost:8080';
  herokuURL = 'https://gotit-backend.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  getUserData(): Observable<UserDTO> {
    const url = `${this.baseUrl}/api/profile/${this.email}`;
    return this.httpClient.get<UserDTO>(url);
  }

  findWonAuctions(): Observable<PurchaseDTO[]> {
    const url = `${this.baseUrl}/api/purchased/${this.email}`;
    return this.httpClient.get<PurchaseDTO[]>(url);
  }

  findWatchedAuctions(): Observable<AuctionDTO[]>  {
    const url = `${this.baseUrl}/api/watched-auctions/${this.email}`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  updateData(userDTO: UserDTO): Observable<UserDTO> {
    const url = `${this.baseUrl}api/update-user-data/${this.email}`;
    return this.httpClient.post<UserDTO>(url, userDTO);
  }

  findUserPostedAuctions(): Observable<AuctionDTO[]> {
    const url = `${this.baseUrl}/api/posted-auctions/${this.email}`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }



}
