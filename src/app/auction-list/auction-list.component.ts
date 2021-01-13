import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuctionDTO } from '../interface/AuctionDTO';
import { CategoryDTO } from '../interface/CategoryDTO';
import { AuctionService } from '../service/auction.service';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss']
})
export class AuctionListComponent implements OnInit {

  categories: CategoryDTO[];
  categoryName: string;
  ListOfProducts: AuctionDTO[];

  constructor(private activatedRoute: ActivatedRoute, private auctionService: AuctionService, private router: Router) { }


  goToAuction(auction: AuctionDTO) {
    this.auctionService.findAuction(auction.id).subscribe(auction => this.router.navigate(['auction-card', auction.id]));
  }

  getListOfProductsCategory() {
    this.auctionService.findCategoryProducts(this.categoryName).subscribe(ListOfProducts => this.ListOfProducts = ListOfProducts);
  }

  ngOnInit(): void {
    this.categoryName = this.activatedRoute.snapshot.paramMap.get('category');
    this.getListOfProductsCategory();
  }

}
