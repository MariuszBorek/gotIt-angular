import { Component, OnInit } from '@angular/core';
import { CategoryDTO } from '../interface/CategoryDTO';
import { AuthenticationService } from '../service/authentication.service';
import { HomeService } from '../service/home.service';
import { AuctionDTO } from '../interface/AuctionDTO';
import { AuctionService } from '../service/auction.service';
import { Router } from '@angular/router';
import { UserProfileService } from '../service/user-profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: CategoryDTO[];
  lastAddedAuctions: AuctionDTO[];
  endingAuctions: AuctionDTO[];
  endedAuctions: AuctionDTO[];
  choosenCategory: CategoryDTO;
  ListOfProducts: AuctionDTO[];
  watchedAuctions: AuctionDTO[];
  topAuction: AuctionDTO;

  photoPath = '/assets/images/photos/';

  constructor(private homeService: HomeService, public authenticationService: AuthenticationService, private auctionService: AuctionService, private router: Router, private userProfileService: UserProfileService) { }

  goToCategory(choosenCategory: CategoryDTO) {
    this.router.navigate(['auction-list', choosenCategory.name])
  }


  getCategory() {
    this.homeService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  goToAuction(auction: AuctionDTO) {
    this.auctionService.findAuction(auction.id).subscribe(auction => this.router.navigate(['auction-card', auction.id]));
  }

  getWatchedAuctions() {
    this.userProfileService.findWatchedAuctions().subscribe(watchedAuctions => this.watchedAuctions = watchedAuctions);
  }

  getFiveLastAddedAuctions() {
    this.homeService.findFiveLastAddedAuctions()
      .subscribe(lastAddedAuctions => this.lastAddedAuctions = lastAddedAuctions);
  }

  getFiveEndingAuctions() {
    this.homeService.findFiveEndingAuctions()
      .subscribe(endingAuctions => this.endingAuctions = endingAuctions);
  }

  getFiveEndedAuctions() {
    this.homeService.findFiveEndedAuctions()
      .subscribe(endedAuctions => this.endedAuctions = endedAuctions);
  }
  getRandomPremiumAuction() {
    this.homeService.findRandomPremiumAuction()
      .subscribe(topAuction => this.topAuction = topAuction);
  }

  checkFinishedAuctions(): void {
    this.homeService.markFinishedAuctions().subscribe(e => console.log(e));
  }

  getHomeAuctions(): void {
    const email = sessionStorage.getItem('username');
    if (!email) {
      this.getFiveLastAddedAuctions();
      this.getFiveEndingAuctions();
      this.getFiveEndedAuctions();
    } else {
      this.getWatchedAuctions();
    }
  }

  ngOnInit(): void {
    this.getHomeAuctions();
    this.getRandomPremiumAuction();
    this.checkFinishedAuctions();
    this.getCategory();
  }

}
