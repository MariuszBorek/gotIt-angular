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
    const url = `https://gotit-backend.herokuapp.com/auction/highest-bid/${auctionId}`
    return this.httpClient.get<OfferDTO>(url);
  }

  findAuction(auctionId: number): Observable<AuctionDTO> {
    const url = `https://gotit-backend.herokuapp.com/auction/${auctionId}`;
    return this.httpClient.get<AuctionDTO>(url);
  }

  findCategoryProducts(categoryName: string): Observable<AuctionDTO[]> {
    const url = `https://gotit-backend.herokuapp.com/auction/category/${categoryName}`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  findActionsMatchingThePhrase(phrase: string): Observable<AuctionDTO[]> {
    const url = `https://gotit-backend.herokuapp.com/auction/phrase/${phrase}`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  buyProduct(auctionId: number): Observable<AuctionDTO> {
    const url = `https://gotit-backend.herokuapp.com/auction/buyNow/${auctionId}/${this.getUserEmail()}`;
    return this.httpClient.get<AuctionDTO>(url);
  }

  findImage(imageName: string): Observable<any> {
    const url = `https://gotit-backend.herokuapp.com/image/get/${imageName}`;
    return this.httpClient.get<any>(url);
  }

  watchProduct(auctionId: number): Observable<AuctionDTO> {
    const url = `https://gotit-backend.herokuapp.com/auction/add-to-watched-auction/${auctionId}/${this.getUserEmail()}`;
    return this.httpClient.get<AuctionDTO>(url);
  }

  makeAnOffer(auctionId: number, offeredPrice: string): Observable<AuctionDTO> {
    const url = `https://gotit-backend.herokuapp.com/auction/make-offer/${offeredPrice}/${auctionId}/${this.getUserEmail()}`;
    return this.httpClient.get<AuctionDTO>(url);
  }

  findUserOffers(): Observable<AuctionDTO[]> {
    const url = `https://gotit-backend.herokuapp.com/auction/bidding/${this.getUserEmail()}`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

}
