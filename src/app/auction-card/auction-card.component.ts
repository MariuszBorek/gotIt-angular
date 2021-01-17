import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;

  constructor(private activatedRoute: ActivatedRoute, private auctionService: AuctionService, private router: Router) { }

  getAuctionDetails() {
    this.auctionService.findAuction(this.auctionId).subscribe(auction => {
      this.auction = auction;
      this.getImage();});
  }

  buyNow() {
    if(sessionStorage.getItem('username') != null) {
      this.auctionService.buyProduct(this.auctionId).subscribe(auction => {
        console.log(auction.title);
        this.router.navigate(['home']);
      });

    } else {
      alert('you have to be logged');
    }
  }

  addToCart() {
    console.log('added to cart');
  }

  getImage(): void {
    this.auctionService.findImage(this.auction.photo)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }

  ngOnInit(): void {
    this.auctionId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getAuctionDetails();

  }

}
