import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuctionDTO } from '../interface/AuctionDTO';
import { OfferDTO } from '../interface/OfferDTO';


@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private httpClient: HttpClient) { }

  private getUserEmail(): string {
    return sessionStorage.getItem('username');
  }

  findHighestOffer(auctionId: number): Observable<OfferDTO>  {
    const url = `http://localhost:8080/auction/highest-bid/${auctionId}`
    return this.httpClient.get<OfferDTO>(url);
  }

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
    return this.httpClient.get<AuctionDTO>(url);
  }

  findImage(imageName: string): Observable<any> {
    const url = `http://localhost:8080/image/get/${imageName}`;
    return this.httpClient.get<any>(url);
  }

  watchProduct(auctionId: number): Observable<AuctionDTO> {
    const url = `http://localhost:8080/auction/add-to-watched-auction/${auctionId}/${this.getUserEmail()}`;
    return this.httpClient.get<AuctionDTO>(url);
  }

  makeAnOffer(auctionId: number, offeredPrice: string): Observable<AuctionDTO> {
    const url = `http://localhost:8080/auction/make-offer/${offeredPrice}/${auctionId}/${this.getUserEmail()}`;
    return this.httpClient.get<AuctionDTO>(url);
  }

  findUserOffers(): Observable<AuctionDTO[]> {
    const url = `http://localhost:8080/auction/bidding/${this.getUserEmail()}`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

}
