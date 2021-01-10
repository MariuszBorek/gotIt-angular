import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDTO } from '../interface/CategoryDTO';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<CategoryDTO[]> {
    const url = `http://localhost:8080/home/categories`;
    return this.httpClient.get<CategoryDTO[]>(url);
  }
}
