import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuctionService } from '../service/auction.service';
import { AuthenticationService } from '../service/authentication.service';
import { UserProfileService } from '../service/user-profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  itemsInCart: number;

  constructor(public authenticationService: AuthenticationService, private router: Router, private userProfileService: UserProfileService) { }

  findAuctions(phrase: string) {
    if(phrase) {
      this.router.navigate(['auction-found', phrase]);
      console.log(phrase);
    }
  }

  checkNumberItemsInCart() {
    this.userProfileService.checkCartSize().subscribe(itemsInCart => {
      if(!itemsInCart) {
        this.itemsInCart = 0;
      } else {
        this.itemsInCart = itemsInCart
      }
    });
  }

  ngOnInit(): void {
    this.checkNumberItemsInCart();
  }

}
