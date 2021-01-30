import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuctionDTO } from '../interface/AuctionDTO';
import { AuctionService } from '../service/auction.service';
import { OfferDTO } from '../interface/OfferDTO';
import { UserProfileService } from '../service/user-profile.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.scss']
})
export class AuctionCardComponent implements OnInit {

  photoPath = '/assets/images/photos/';

  auctionId: number;
  auction: AuctionDTO;

  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  actualPrice: string;
  highestOffer: OfferDTO;


  constructor(private activatedRoute: ActivatedRoute, private userProfileService: UserProfileService, private auctionService: AuctionService, private router: Router) { }

  getAuctionDetails() {
    this.auctionService.findAuction(this.auctionId).subscribe(auction => {
      this.getHighestBid();
      this.auction = auction;
      this.getImage();});
  }

  getHighestBid() {
    this.auctionService.findHighestOffer(this.auctionId)
    .subscribe(highestOffer => this.highestOffer = highestOffer);
  }

  buyNow() {
    if(sessionStorage.getItem('username') != null) {
      this.auctionService.buyProduct(this.auctionId).subscribe(auction => this.router.navigate(['home']));

    } else {
      alert('you have to be logged');
    }
  }

  bidAuction(offeredPrice: string) {
    if(sessionStorage.getItem('username') != null) {
      this.auctionService.makeAnOffer(this.auctionId, offeredPrice).subscribe(auction => this.auction = auction);

    } else {
      alert('you have to be logged');
    }
    location.reload();

  }

  addToCart() {
    if(sessionStorage.getItem('username') != null) {
      this.userProfileService.addAuctiontoCart(this.auctionId).subscribe(e => console.log(e));
      location.reload();
    } else {
      alert('you have to be logged');
    }
  }

  watchAuction() {
    if(sessionStorage.getItem('username') != null) {
      this.auctionService.watchProduct(this.auctionId).subscribe(auction => this.router.navigate(['home']));
    } else {
      alert('you have to be logged');
    }
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
