import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../protected/interfaces/category.interface';
import { map, tap } from 'rxjs';
import { CategoryResponse } from '../protected/interfaces/category-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  BASEURL = environment.baseUrl;
  token!: string;
  headers!: HttpHeaders;
  constructor(private http: HttpClient) { 
    const token =localStorage.getItem('token') 
    this.token = token ? token : '';
    this.headers = new HttpHeaders().set('X-Token', this.token)
  }
  createCategory(category: Category){
   return this.http.post(`${this.BASEURL}/categories`, category, {headers: this.headers})
  }
  updateCategory(category: Category){
    return this.http.patch(
      `${this.BASEURL}/categories/${category._id}`, category, {headers: this.headers}
    )
  }
  deleteCategory( id: string | undefined){
    return this.http.delete(
      `${this.BASEURL}/categories/${id}`,
      {headers: this.headers}
    )
  }
  getcategories(){
   return this.http.get<CategoryResponse>(`${this.BASEURL}/categories`, {headers: this.headers})
    .pipe(
      tap((response)=> console.log(response)),
      map((response)=> response['categories'])
        
      
    )
  }
}
