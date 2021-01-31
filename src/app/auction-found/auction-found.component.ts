import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuctionDTO } from '../interface/AuctionDTO';
import { CategoryDTO } from '../interface/CategoryDTO';
import { AuctionService } from '../service/auction.service';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-auction-found',
  templateUrl: './auction-found.component.html',
  styleUrls: ['./auction-found.component.scss']
})
export class AuctionFoundComponent implements OnInit {

  phrase: string;
  ListOfProducts: AuctionDTO[];
  categories: CategoryDTO[];

  promotedAuction = false;
  auctionType = 'all';
  category = 'Choose category';
  minPrice = 0;
  maxPrice = 0;

  photoPath = '/assets/images/photos/';

  constructor(private activatedRoute: ActivatedRoute, private auctionService: AuctionService, private router: Router, private homeService: HomeService) { }

  getCategory() {
    this.homeService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  goToAuction(auction: AuctionDTO) {
    this.auctionService.findAuction(auction.id).subscribe(auction => this.router.navigate(['auction-card', auction.id]));
  }

  getAuctionsMatchingThePhrase() {
    this.auctionService.findActionsMatchingThePhrase(this.phrase).subscribe(ListOfProducts => this.ListOfProducts = ListOfProducts);
  }

  getAuctionsMatchingTheFilters() {
    if (this.maxPrice == undefined) {
      this.maxPrice = 0;
    }
    if (this.minPrice == undefined) {
      this.minPrice = 0;
    }
    this.auctionService.findActionsMatchingTheFilters(this.phrase, this.promotedAuction, this.auctionType, this.category, this.minPrice, this.maxPrice).subscribe(ListOfProducts => this.ListOfProducts = ListOfProducts);
  }

  ngOnInit(): void {
    this.phrase = this.activatedRoute.snapshot.paramMap.get('phrase');
    this.getAuctionsMatchingThePhrase();
    this.getCategory();
  }

}
