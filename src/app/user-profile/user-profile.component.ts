import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../service/user-profile.service';
import { UserDTO } from '../interface/UserDTO';
import { AuctionService } from '../service/auction.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NewAuctionDTO } from '../interface/NewAuctionDTO';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userData: UserDTO;
  selectedFile: File;
  message: string;
  newAuction: NewAuctionDTO;

  photoPath = '/assets/images/avatar/';

  constructor(private userProfileService: UserProfileService, private auctionService: AuctionService, private router: Router, private httpClient: HttpClient) { }

  goToAuction(auctionId: number) {
    this.auctionService.findAuction(auctionId).subscribe(auction => this.router.navigate(['auction-card', auction.id]));
  }

  getProfilData() {
    this.userProfileService.getUserData()
      .subscribe(userData => this.userData = userData);

  }

  updateUserData() {
    this.userProfileService.updateData(this.userData)
      .subscribe(userData => {
        this.userData = userData;
        this.refresh();
      });
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUploadAvatar() {
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.userProfileService.updateAvatar(uploadImageData).subscribe();
  }

  checkIfIsAvatar(): boolean {
    if(this.userData.avatar === 'photo') {
      return false;
    }
    return true;
  }

  refresh(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    this.getProfilData();
  }

}
