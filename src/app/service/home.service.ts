import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDTO } from '../interface/CategoryDTO';
import { AuctionDTO } from '../interface/AuctionDTO';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl = 'https://gotit-backend.herokuapp.com';
  // baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<CategoryDTO[]> {
    const url = `${this.baseUrl}/home/categories`;
    return this.httpClient.get<CategoryDTO[]>(url);
  }

  findFiveLastAddedAuctions(): Observable<AuctionDTO[]> {
    const url = `${this.baseUrl}/auction/last-added-auctions`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  findFiveEndingAuctions(): Observable<AuctionDTO[]> {
    const url = `${this.baseUrl}/auction/ending-auctions`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  findFiveEndedAuctions(): Observable<AuctionDTO[]> {
    const url = `${this.baseUrl}/auction/ended-auctions`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  findRandomPremiumAuction(): Observable<AuctionDTO> {
    const url = `${this.baseUrl}/auction/random-premium-auction`;
    return this.httpClient.get<AuctionDTO>(url);
  }

  markFinishedAuctions(): Observable<boolean>  {
    const url = `${this.baseUrl}/home/check-finished-auctions`;
    return this.httpClient.get<boolean>(url);
  }






}
