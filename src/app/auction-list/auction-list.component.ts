import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuctionDTO } from '../interface/AuctionDTO';
import { AuctionService } from '../service/auction.service';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss']
})
export class AuctionListComponent implements OnInit {

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
    console.log(this.categoryName)
  }

}
