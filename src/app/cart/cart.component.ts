import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuctionDTO } from '../interface/AuctionDTO';
import { AuctionService } from '../service/auction.service';
import { UserProfileService } from '../service/user-profile.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  ListOfProducts: AuctionDTO[];

  photoPath = '/assets/images/photos/';

  constructor(private activatedRoute: ActivatedRoute, private auctionService: AuctionService, private router: Router, private userProfileService: UserProfileService) { }

  checkIfCartIsEmpty(): boolean {
    if (!this.ListOfProducts || this.ListOfProducts == null || this.ListOfProducts.length == 0) {
      return true;
    }
    return false;
  }

  goToAuction(auction: AuctionDTO) {
    this.auctionService.findAuction(auction.id).subscribe(auction => this.router.navigate(['auction-card', auction.id]));
  }

  getUserAuctionsFromCart() {
    this.userProfileService.findAuctionsInCart().subscribe(ListOfProducts => this.ListOfProducts = ListOfProducts);
  }


  ngOnInit(): void {
    this.getUserAuctionsFromCart();
  }

}
