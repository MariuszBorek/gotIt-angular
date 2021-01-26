import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryDTO } from '../interface/CategoryDTO';
import { NewAuctionDTO } from '../interface/NewAuctionDTO';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-user-create-auction',
  templateUrl: './user-create-auction.component.html',
  styleUrls: ['./user-create-auction.component.scss']
})
export class UserCreateAuctionComponent implements OnInit {

  baseUrl = 'http://localhost:8080';
  newCreatedAuction = new NewAuctionDTO('', '', '', '', '', false, 0, false);
  categories: CategoryDTO[];
  selectedFile: File;
  message: string;

  constructor(private httpClient: HttpClient, private homeService: HomeService) { }

  getCategory() {
    this.homeService.getCategories()
      .subscribe(categories => { this.categories = categories, console.log(categories); });
  }


  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }


  onUploadAuction() {
    console.log(this.selectedFile);
    console.log(this.newCreatedAuction);

    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);


    const email = sessionStorage.getItem('username');
    const url = `${this.baseUrl}/api/set-up-auction/${email}?category=${this.newCreatedAuction.category}&title=${this.newCreatedAuction.title}&description=${this.newCreatedAuction.description}&minPrice=${this.newCreatedAuction.minPrice}&buyNowPrice=${this.newCreatedAuction.buyNowPrice}&promotedAuction=${this.newCreatedAuction.promotedAuction}&endDate=${this.newCreatedAuction.endDate}&isAuction=${this.newCreatedAuction.isAuction}`;
    console.log(url);
    this.httpClient.post(url, uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
        this.refresh();
      }
      );
  }

  refresh(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    this.getCategory();
  }

}
