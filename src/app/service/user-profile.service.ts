import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from '../interface/UserDTO';
import { Observable } from 'rxjs';
import { PurchaseDTO } from '../interface/PurchaseDTO';
import { AuctionDTO } from '../interface/AuctionDTO';
import { NewAuctionDTO } from '../interface/NewAuctionDTO';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  // email = sessionStorage.getItem('username');

  // baseUrl = 'https://gotit-backend.herokuapp.com';
  baseUrl = 'http://localhost:8080';


  constructor(private httpClient: HttpClient) { }

    private getUserEmail(): string {
    return sessionStorage.getItem('username');
  }

  getUserData(): Observable<UserDTO> {
    const url = `${this.baseUrl}/api/profile/${this.getUserEmail()}`;
    return this.httpClient.get<UserDTO>(url);
  }

  findWonAuctions(): Observable<PurchaseDTO[]> {
    const url = `${this.baseUrl}/api/purchased/${this.getUserEmail()}`;
    return this.httpClient.get<PurchaseDTO[]>(url);
  }

  updateData(userDTO: UserDTO): Observable<UserDTO> {
    const url = `${this.baseUrl}/api/update-user-data/${this.getUserEmail()}`;
    return this.httpClient.post<UserDTO>(url, userDTO);
  }

  updateAvatar(uploadImageData: FormData): any {
    return this.httpClient.post(`${this.baseUrl}/image/upload-avatar/${this.getUserEmail()}`, uploadImageData, { observe: 'response' });
  }

  findUserPostedAuctions(): Observable<AuctionDTO[]> {
    const url = `${this.baseUrl}/api/posted-auctions/${this.getUserEmail()}`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  createUserAuction(newCreatedAuction: NewAuctionDTO, uploadImageData: FormData): any {
    const url = `${this.baseUrl}/api/set-up-auction/${this.getUserEmail()}?category=${newCreatedAuction.category}&title=${newCreatedAuction.title}&description=${newCreatedAuction.description}&minPrice=${newCreatedAuction.minPrice}&buyNowPrice=${newCreatedAuction.buyNowPrice}&promotedAuction=${newCreatedAuction.promotedAuction}&endDate=${newCreatedAuction.endDate}&isAuction=${newCreatedAuction.isAuction}`;
    return this.httpClient.post<any>(url, uploadImageData, { observe: 'response' });
  }

  findAuctionsInCart(): Observable<AuctionDTO[]> {
    const url = `${this.baseUrl}/api/cart/${this.getUserEmail()}`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  addAuctiontoCart(auctionId: number): Observable<any> {
    const url = `${this.baseUrl}/api/add-to-cart/${this.getUserEmail()}/${auctionId}`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  checkCartSize(): Observable<number> {
    const url = `${this.baseUrl}/api/check-cart-size/${this.getUserEmail()}`;
    return this.httpClient.get<number>(url);
  }


}
