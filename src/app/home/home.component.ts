import { Component, OnInit } from '@angular/core';
import { CategoryDTO } from '../interface/CategoryDTO';
import { AuthenticationService } from '../service/authentication.service';
import { HomeService } from '../service/home.service';
import { AuctionDTO } from '../interface/AuctionDTO';
import { AuctionService } from '../service/auction.service';
import { Router } from '@angular/router';

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

  constructor(private homeService: HomeService, public authenticationService: AuthenticationService, private auctionService: AuctionService, private router: Router) { }

  goToCategory(choosenCategory: CategoryDTO) {
    this.router.navigate(['auction-list', choosenCategory.name])
  }

  getCategory() {
    this.homeService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  // choseCategory(category: CategoryDTO): void {
  //   console.log(category.name)
  // }

  goToAuction(auction: AuctionDTO) {
    this.auctionService.findAuction(auction.id).subscribe(auction => this.router.navigate(['auction-card', auction.id]));
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

  ngOnInit(): void {
    this.getCategory();
    this.getFiveLastAddedAuctions();
    this.getFiveEndingAuctions();
    this.getFiveEndedAuctions();
  }

}
