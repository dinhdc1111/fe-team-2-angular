import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../interfaces/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/categories`)
  }
  getByID(id: string): Observable<{ category: ICategory }> {
    return this.http.get<{ category: ICategory }>(`http://localhost:3000/api/categories/${id}`)
  }
  remove(id: string): Observable<ICategory> {
    return this.http.delete<ICategory>(`http://localhost:3000/api/categories/${id}`)
  }
  create(category: any): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/api/categories`, category)
  }

  update(category: any): Observable<any> {
    const { _id, ...data } = category
    return this.http.put<any>(`http://localhost:3000/api/categories/${_id}`, data)
  }
}
