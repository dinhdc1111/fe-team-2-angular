import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<{ product: IProduct[] }> {
    return this.http.get<{ product: IProduct[] }>(`http://localhost:3000/api/product`)
  }
  getByID(id: string): Observable<{ product: IProduct }> {
    return this.http.get<{ product: IProduct }>(`http://localhost:3000/api/product/${id}`)
  }
  remove(id: string): Observable<IProduct> {
    return this.http.delete<IProduct>(`http://localhost:3000/api/product/${id}`)
  }
  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`http://localhost:3000/api/product`, product)
  }
  Update(id: string, product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`http://localhost:3000/api/product/${id}`, product)
  }
  relatedProducts(categoryId: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/categories/${categoryId}?_embed=product`)
  }

}
