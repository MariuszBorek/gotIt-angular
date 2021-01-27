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

    this.registrationService.createUser(userDTO)
      .subscribe(data => {
        this.router.navigate(['home']);
      });
  };

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  // onUpload() {
  //   const uploadImageData = new FormData();
  //   uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

  //   const email = sessionStorage.getItem('username');
  //   this.httpClient.post(`http://localhost:8080/image/upload-avatar/${email}`, uploadImageData, { observe: 'response' })
  //     .subscribe((response) => {
  //       if (response.status === 200) {
  //         this.message = 'Image uploaded successfully';
  //       } else {
  //         this.message = 'Image not uploaded successfully';
  //       }
  //       // this.refresh();
  //     }
  //     );
  // }

  ngOnInit(): void {
  }

}





