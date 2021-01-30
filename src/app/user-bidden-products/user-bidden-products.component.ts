import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuctionDTO } from '../interface/AuctionDTO';
import { UserDTO } from '../interface/UserDTO';
import { AuctionService } from '../service/auction.service';
import { UserProfileService } from '../service/user-profile.service';

@Component({
  selector: 'app-user-bidden-products',
  templateUrl: './user-bidden-products.component.html',
  styleUrls: ['./user-bidden-products.component.scss']
})
export class UserBiddenProductsComponent implements OnInit {

  userData: UserDTO;
  userOffers: AuctionDTO[];

  auctionPhotoPath = '/assets/images/photos/';

  constructor(private userProfileService: UserProfileService, private auctionService: AuctionService, private router: Router) { }

  goToAuction(auctionId: number) {
    this.auctionService.findAuction(auctionId).subscribe(auction => this.router.navigate(['auction-card', auction.id]));
  }

  getProfilData() {
    this.userProfileService.getUserData()
      .subscribe(userData => {
        this.userData = userData;
        this.getUserOffers();
      });

  }

  getUserOffers() {
    if(sessionStorage.getItem('username') != null) {
      this.auctionService.findUserOffers().subscribe(userOffers =>
        this.userOffers = userOffers);
    } else {
      alert('you have to be logged');
    }
  }

  checkIfAuctionsBidIsEmpty(): boolean {
    if(!this.userOffers || this.userOffers == null || this.userOffers.length == 0) {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    this.getProfilData();
  }

}
