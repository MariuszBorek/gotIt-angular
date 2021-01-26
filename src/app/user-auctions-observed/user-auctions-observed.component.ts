import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuctionDTO } from '../interface/AuctionDTO';
import { UserDTO } from '../interface/UserDTO';
import { AuctionService } from '../service/auction.service';
import { UserProfileService } from '../service/user-profile.service';

@Component({
  selector: 'app-user-auctions-observed',
  templateUrl: './user-auctions-observed.component.html',
  styleUrls: ['./user-auctions-observed.component.scss']
})
export class UserAuctionsObservedComponent implements OnInit {

  userData: UserDTO;
  auctionsObserved: AuctionDTO[];
  auctionPhotoPath = '/assets/images/photos/';

  constructor(private userProfileService: UserProfileService, private auctionService: AuctionService, private router: Router) { }

  getProfilData() {
    this.userProfileService.getUserData()
      .subscribe(userData => {
        this.userData = userData;
        this.getAuctionsObserved();
      });

  }

  getAuctionsObserved() {
    this.userProfileService.findWatchedAuctions()
      .subscribe(auctionsObserved =>
        this.auctionsObserved = auctionsObserved);

  }

  goToAuction(auctionId: number) {
    this.auctionService.findAuction(auctionId).subscribe(auction => this.router.navigate(['auction-card', auction.id]));
  }

  ngOnInit(): void {
    this.getProfilData();
  }

}
