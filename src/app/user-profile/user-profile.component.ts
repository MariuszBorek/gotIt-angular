import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../service/user-profile.service';
import { UserDTO } from '../interface/UserDTO';
import { PurchaseDTO } from '../interface/PurchaseDTO';
import { AuctionService } from '../service/auction.service';
import { Router } from '@angular/router';
import { AuctionDTO } from '../interface/AuctionDTO';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  choosenSite: number;
  userData: UserDTO;
  listOfPurchasedAuctions: PurchaseDTO[];
  watchedAuctions: AuctionDTO[];

  photoPath = '/assets/images/avatar/';
  auctionPhotoPath = '/assets/images/photos/';

  constructor(private userProfileService: UserProfileService, private auctionService: AuctionService, private router: Router) { }

  goToAuction(auctionId: number) {
    this.auctionService.findAuction(auctionId).subscribe(auction => this.router.navigate(['auction-card', auction.id]));
  }

  getProfilData() {

    this.userProfileService.getUserData()
      .subscribe(userData => {
        this.userData = userData;
        this.choosenSite = 0;
      });

  }

  setAuction() {
    this.choosenSite = 1;
    console.log('setAuction');
  }

  getWatchedAuctions() {
    this.userProfileService.findWonAuctions()
      .subscribe(listOfPurchasedAuctions => {
        this.listOfPurchasedAuctions = listOfPurchasedAuctions;
        this.choosenSite = 2;
      });

  }

  getWonAuctions() {
    this.userProfileService.findWatchedAuctions()
      .subscribe(watchedAuctions => {
        this.watchedAuctions = watchedAuctions;
        this.choosenSite = 3;
      });

  }


  updateUserData() {
    this.userProfileService.updateData(this.userData)
      .subscribe(userData => {
        this.userData = userData;
        this.refresh();});
  }

  refresh(): void {
    window.location.reload();
}

  ngOnInit(): void {
    this.getProfilData();

  }

}
