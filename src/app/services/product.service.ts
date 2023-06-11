import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL: string = `http://localhost:3000/api`;
  constructor(private http: HttpClient) {}
  getAll(): Observable<{ product: IProduct[] }> {
    return this.http.get<{ product: IProduct[] }>(`${this.API_URL}/product`);
  }
}
