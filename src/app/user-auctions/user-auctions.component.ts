import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuctionDTO } from '../interface/AuctionDTO';
import { UserDTO } from '../interface/UserDTO';
import { AuctionService } from '../service/auction.service';
import { UserProfileService } from '../service/user-profile.service';

@Component({
  selector: 'app-user-auctions',
  templateUrl: './user-auctions.component.html',
  styleUrls: ['./user-auctions.component.scss']
})
export class UserAuctionsComponent implements OnInit {

  userData: UserDTO;
  userPostedAuctions: AuctionDTO[];
  auctionPhotoPath = '/assets/images/photos/';

  constructor(private userProfileService: UserProfileService, private auctionService: AuctionService, private router: Router) { }

  goToAuction(auctionId: number) {
    this.auctionService.findAuction(auctionId).subscribe(auction => this.router.navigate(['auction-card', auction.id]));
  }

  getProfilData() {
    this.userProfileService.getUserData()
      .subscribe(userData => {
        this.userData = userData;
        this.getUserPostedAuctions();
      });
  }

  getUserPostedAuctions() {
    this.userProfileService.findUserPostedAuctions()
      .subscribe(userPostedAuctions =>
        this.userPostedAuctions = userPostedAuctions);
  }

  ngOnInit(): void {
    this.getProfilData();
  }

}
