import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDTO } from '../interface/UserDTO';
import { RegistrationService } from '../service/registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  email: string;
  password: string;
  name: string;
  surname: string;
  street: string;
  houseNumber: string;
  postcode: string;
  province: string;
  city: string;
  avatar: string;

  repeatedPassword: string;
  paswordMessage: string;

  selectedFile: File;
  imgURL: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  constructor(private registrationService: RegistrationService, private router: Router, private httpClient: HttpClient) { }

  createUser(): void {
    const userDTO = new UserDTO(this.email,
      this.password,
      this.name,
      this.surname,
      this.street,
      this.houseNumber,
      this.postcode,
      this.province,
      this.city,
      this.avatar);

      if(this.repeatedPassword == this.password) {
        this.registrationService.createUser(userDTO)
        .subscribe(data => {
          this.router.navigate(['login']);
        });
      } else {
        this.paswordMessage = 'passwords do not match!';
      }
  };

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
  }

}





