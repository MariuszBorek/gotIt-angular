import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDTO } from '../interface/CategoryDTO';
import { AuctionDTO } from '../interface/AuctionDTO';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<CategoryDTO[]> {
    const url = `http://localhost:8080/home/categories`;
    return this.httpClient.get<CategoryDTO[]>(url);
  }

  findFiveLastAddedAuctions(): Observable<AuctionDTO[]> {
    const url = `http://localhost:8080/auction/last-added-auctions`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  findFiveEndingAuctions(): Observable<AuctionDTO[]> {
    const url = `http://localhost:8080/auction/ending-auctions`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  findFiveEndedAuctions(): Observable<AuctionDTO[]> {
    const url = `http://localhost:8080/auction/ended-auctions`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  findRandomPremiumAuction(): Observable<AuctionDTO> {
    const url = `http://localhost:8080/auction/random-premium-auction`;
    return this.httpClient.get<AuctionDTO>(url);
  }

  markFinishedAuctions(): Observable<boolean>  {
    const url = `http://localhost:8080/home/check-finished-auctions`;
    return this.httpClient.get<boolean>(url);
  }






}
