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

}
