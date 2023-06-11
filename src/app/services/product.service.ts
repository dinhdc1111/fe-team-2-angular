import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/api/product/${id}`);
  }
}
