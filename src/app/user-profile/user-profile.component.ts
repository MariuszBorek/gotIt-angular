import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../service/user-profile.service';
import { UserDTO } from '../interface/UserDTO';
import { PurchaseDTO } from '../interface/PurchaseDTO';
import { AuctionService } from '../service/auction.service';
import { Router } from '@angular/router';
import { AuctionDTO } from '../interface/AuctionDTO';
import { HttpClient } from '@angular/common/http';
import { NewAuctionDTO } from '../interface/NewAuctionDTO';
import { CategoryDTO } from '../interface/CategoryDTO';
import { HomeService } from '../service/home.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  choosenSite: number;
  userData: UserDTO;
  listOfPurchasedAuctions: PurchaseDTO[];
  watchedAuctions: AuctionDTO[];
  userPostedAuctions: AuctionDTO[];
  selectedFile: File;
  message: string;
  newAuction: NewAuctionDTO;
  userOffers: AuctionDTO[];

  newCreatedAuction = new NewAuctionDTO('', '', '', '', '', false, 0);

  categories: CategoryDTO[];



  photoPath = '/assets/images/avatar/';
  auctionPhotoPath = '/assets/images/photos/';

  constructor(private userProfileService: UserProfileService, private auctionService: AuctionService, private router: Router, private httpClient: HttpClient, private homeService: HomeService) { }

  getCategory() {
    this.homeService.getCategories()
      .subscribe(categories => {this.categories = categories, console.log(categories); });
  }

  goToAuction(auctionId: number) {
    this.auctionService.findAuction(auctionId).subscribe(auction => this.router.navigate(['auction-card', auction.id]));
  }

  getProfilData() {
    this.userProfileService.getUserData()
      .subscribe(userData => {
        this.userData = userData;
        this.choosenSite = 0;
      });

  }

  setAuction() {
    this.choosenSite = 1;
  }

  onUploadAuctionPhoto() {
    console.log('test');
  }

  getWatchedAuctions() {
    this.userProfileService.findWonAuctions()
      .subscribe(listOfPurchasedAuctions => {
        this.listOfPurchasedAuctions = listOfPurchasedAuctions;
        this.choosenSite = 2;
      });

  }

  getWonAuctions() {
    this.userProfileService.findWatchedAuctions()
      .subscribe(watchedAuctions => {
        this.watchedAuctions = watchedAuctions;
        this.choosenSite = 3;
      });

  }

  getUserPostedAuctions() {
    this.userProfileService.findUserPostedAuctions()
      .subscribe(userPostedAuctions => {
        this.userPostedAuctions = userPostedAuctions;
        this.choosenSite = 4;
      });

  }


  updateUserData() {
    this.userProfileService.updateData(this.userData)
      .subscribe(userData => {
        this.userData = userData;
        this.refresh();
      });
  }

  refresh(): void {
    window.location.reload();
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUploadAvatar() {
    console.log(this.selectedFile);

    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);


    const email = sessionStorage.getItem('username');
    this.httpClient.post(`http://localhost:8080/image/upload-avatar/${email}`, uploadImageData, { observe: 'response' })
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

  onUploadAuction() {
    console.log(this.selectedFile);
    console.log(this.newCreatedAuction);

    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);


    const email = sessionStorage.getItem('username');
    const url = `http://localhost:8080/api/set-up-auction/${email}?category=${this.newCreatedAuction.category}&title=${this.newCreatedAuction.title}&description=${this.newCreatedAuction.description}&minPrice=${this.newCreatedAuction.minPrice}&buyNowPrice=${this.newCreatedAuction.buyNowPrice}&promotedAuction=${this.newCreatedAuction.promotedAuction}&endDate=${this.newCreatedAuction.endDate}`;
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

  getUserOffers() {
    if(sessionStorage.getItem('username') != null) {
      this.auctionService.findUserOffers().subscribe(userOffers => {
        this.userOffers = userOffers;
          this.choosenSite = 5;
        });

    } else {
      alert('you have to be logged');
    }
  }



  ngOnInit(): void {
    this.getCategory();
    this.getProfilData();

  }

}
