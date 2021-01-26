import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseDTO } from '../interface/PurchaseDTO';
import { UserDTO } from '../interface/UserDTO';
import { AuctionService } from '../service/auction.service';
import { UserProfileService } from '../service/user-profile.service';

@Component({
  selector: 'app-user-auctions-won',
  templateUrl: './user-auctions-won.component.html',
  styleUrls: ['./user-auctions-won.component.scss']
})
export class UserAuctionsWonComponent implements OnInit {

  userData: UserDTO;
  listOfPurchasedAuctions: PurchaseDTO[];
  auctionPhotoPath = '/assets/images/photos/';

  constructor(private userProfileService: UserProfileService, private auctionService: AuctionService, private router: Router) { }

  goToAuction(auctionId: number) {
    this.auctionService.findAuction(auctionId).subscribe(auction => this.router.navigate(['auction-card', auction.id]));
  }

  getProfilData() {
    this.userProfileService.getUserData()
      .subscribe(userData => {
        this.userData = userData;
        this.getPurchasedAuctions();
      });

  }

  getPurchasedAuctions() {
    this.userProfileService.findWonAuctions()
      .subscribe(listOfPurchasedAuctions =>
        this.listOfPurchasedAuctions = listOfPurchasedAuctions);

  }

  ngOnInit(): void {
    this.getProfilData();
  }

}
