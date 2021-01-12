import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuctionDTO } from '../interface/AuctionDTO';
import { AuctionService } from '../service/auction.service';

@Component({
  selector: 'app-auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.scss']
})
export class AuctionCardComponent implements OnInit {

  auctionId: number;
  auction: AuctionDTO;

  constructor(private activatedRoute: ActivatedRoute, private auctionService: AuctionService) { }

  getAuctionDetails() {
    this.auctionService.findAuction(this.auctionId).subscribe(auction => this.auction = auction);
  }

  buyNow() {
    console.log('you both the product');
  }

  addToCart() {
    console.log('added to cart');
  }

  ngOnInit(): void {
    this.auctionId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getAuctionDetails();
  }

}
