import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuctionDTO } from '../interface/AuctionDTO';
import { OfferDTO } from '../interface/OfferDTO';


@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  baseUrl = 'https://gotit-backend.herokuapp.com';
  // baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  private getUserEmail(): string {
    return sessionStorage.getItem('username');
  }

  findHighestOffer(auctionId: number): Observable<OfferDTO>  {
    const url = `${this.baseUrl}/auction/highest-bid/${auctionId}`
    return this.httpClient.get<OfferDTO>(url);
  }

  findAuction(auctionId: number): Observable<AuctionDTO> {
    const url = `${this.baseUrl}/auction/${auctionId}`;
    return this.httpClient.get<AuctionDTO>(url);
  }

  findCategoryProducts(categoryName: string): Observable<AuctionDTO[]> {
    const url = `${this.baseUrl}/auction/category/${categoryName}`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  findActionsMatchingThePhrase(phrase: string): Observable<AuctionDTO[]> {
    const url = `${this.baseUrl}/auction/phrase/${phrase}`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  buyProduct(auctionId: number): Observable<AuctionDTO> {
    const url = `${this.baseUrl}/auction/buyNow/${auctionId}/${this.getUserEmail()}`;
    return this.httpClient.get<AuctionDTO>(url);
  }

  findImage(imageName: string): Observable<any> {
    const url = `${this.baseUrl}/image/get/${imageName}`;
    return this.httpClient.get<any>(url);
  }

  watchProduct(auctionId: number): Observable<AuctionDTO> {
    const url = `${this.baseUrl}/auction/add-to-watched-auction/${auctionId}/${this.getUserEmail()}`;
    return this.httpClient.get<AuctionDTO>(url);
  }

  makeAnOffer(auctionId: number, offeredPrice: string): Observable<AuctionDTO> {
    const url = `${this.baseUrl}/auction/make-offer/${offeredPrice}/${auctionId}/${this.getUserEmail()}`;
    return this.httpClient.get<AuctionDTO>(url);
  }

  findUserOffers(): Observable<AuctionDTO[]> {
    const url = `${this.baseUrl}/auction/bidding/${this.getUserEmail()}`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  findWatchedAuctions(): Observable<AuctionDTO[]> {
    const url = `${this.baseUrl}/auction/watched-auctions/${this.getUserEmail()}`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  findPremiumAuctions(): Observable<AuctionDTO[]> {
    const url = `${this.baseUrl}/auction/premium-auctions`;
    return this.httpClient.get<AuctionDTO[]>(url);
  }

  findActionsMatchingTheFilters(phrase: string, promotedAuction: boolean, auctionType: string,
    category: string, minPrice: number, maxPrice: number): Observable<AuctionDTO[]>  {
    const url = `${this.baseUrl}/auction/filter/${phrase}/${promotedAuction}/${auctionType}/${category}/${minPrice}/${maxPrice}`;
    console.log(url);
    return this.httpClient.get<AuctionDTO[]>(url);
  }

}
