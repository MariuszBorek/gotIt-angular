import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuctionDTO } from '../interface/AuctionDTO';
import { AuctionService } from '../service/auction.service';

@Component({
  selector: 'app-auction-premium',
  templateUrl: './auction-premium.component.html',
  styleUrls: ['./auction-premium.component.scss']
})
export class AuctionPremiumComponent implements OnInit {

  premiumAuctions: AuctionDTO[];

  auctionPhotoPath = '/assets/images/photos/';

  constructor(private auctionService: AuctionService, private router: Router) { }

  getPremiumAuctions() {
    this.auctionService.findPremiumAuctions().subscribe(premiumAuctions => this.premiumAuctions = premiumAuctions);
  }

  goToAuction(auction: AuctionDTO) {
    this.auctionService.findAuction(auction.id).subscribe(auction => this.router.navigate(['auction-card', auction.id]));
  }

  ngOnInit(): void {
    this.getPremiumAuctions();
  }

}
