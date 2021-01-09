import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../service/user-profile.service';
import { User } from '../interface/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userData: User;

  constructor(private userProfileService: UserProfileService) { }

  getData() {
    this.userProfileService.getUserData()
    .subscribe(userData => this.userData = userData)
  }

  updateUserData() {
    console.log('your data was updated');
  }

  ngOnInit(): void {
    this.getData();

  }

}
