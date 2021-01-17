import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuctionDTO } from '../interface/AuctionDTO';


@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private httpClient: HttpClient) { }

  findAuction(auctionId: number): Observable<AuctionDTO> {
    const url = `http://localhost:8080/auction/${auctionId}`;
    return this.httpClient.get<AuctionDTO>(url);
  }

  findCategoryProducts(categoryName: string): Observable<AuctionDTO[]> {
    const url = `http://localhost:8080/auction/category/${categoryName}`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  findActionsMatchingThePhrase(phrase: string): Observable<AuctionDTO[]> {
    const url = `http://localhost:8080/auction/phrase/${phrase}`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  buyProduct(auctionId: number): Observable<AuctionDTO> {
    const url = `http://localhost:8080/auction/buyNow/${auctionId}/${this.getUserEmail()}`;
    console.log(url);
    return this.httpClient.get<AuctionDTO>(url);
  }

  private getUserEmail(): string {
    return sessionStorage.getItem('username');
  }

  findImage(imageName: string): Observable<any> {
    const url = `http://localhost:8080/image/get/${imageName}`;
    return this.httpClient.get<any>(url);
  }

  watchProduct(auctionId: number): Observable<AuctionDTO> {
    const url = `http://localhost:8080/auction/add-to-watched-auction/${auctionId}/${this.getUserEmail()}`;
    return this.httpClient.get<AuctionDTO>(url);
  }

}
