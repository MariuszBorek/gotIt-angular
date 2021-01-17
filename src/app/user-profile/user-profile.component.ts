import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../service/user-profile.service';
import { UserDTO } from '../interface/UserDTO';
import { PurchaseDTO } from '../interface/PurchaseDTO';
import { AuctionService } from '../service/auction.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  choosenSite: number;
  userData: UserDTO;
  listOfPurchasedAuctions: PurchaseDTO[];

  photoPath = '/assets/images/avatar/';
  auctionPhotoPath = '/assets/images/photos/';

  constructor(private userProfileService: UserProfileService, private auctionService: AuctionService, private router: Router) { }

  goToAuction(auctionId: number) {
    this.auctionService.findAuction(auctionId).subscribe(auction => this.router.navigate(['auction-card', auction.id]));
  }

  getProfilData() {
    this.choosenSite = 0;
    this.userProfileService.getUserData()
      .subscribe(userData => this.userData = userData);
  }

  setAuction() {
    this.choosenSite = 1;
    console.log('setAuction');
  }

  getWatchedAuctions() {
    this.choosenSite = 2;
    console.log('WatchedAuctions');
  }

  getWonAuctions() {
    this.choosenSite = 3;
    this.userProfileService.findWonAuctions()
      .subscribe(listOfPurchasedAuctions => this.listOfPurchasedAuctions = listOfPurchasedAuctions);
  }


  updateUserData() {
    console.log('your data was updated');
  }

  ngOnInit(): void {
    this.getProfilData();
  }

}
