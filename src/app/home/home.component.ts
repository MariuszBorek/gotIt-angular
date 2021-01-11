import { Component, OnInit } from '@angular/core';
import { CategoryDTO } from '../interface/CategoryDTO';
import { AuthenticationService } from '../service/authentication.service';
import { HomeService } from '../service/home.service';
import { AuctionDTO } from '../interface/AuctionDTO';

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

  constructor(private homeService: HomeService, public authenticationService: AuthenticationService) { }

  getCategory() {
    this.homeService.getCategories()
    .subscribe(categories => this.categories = categories);
  }

  choseCategory(category: CategoryDTO): void {
    console.log(category.name)
  }

  goToAuction(auction: AuctionDTO) {
    console.log(auction);
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
