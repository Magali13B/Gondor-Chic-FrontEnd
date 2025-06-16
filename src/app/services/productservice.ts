import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://frodon.onrender.com/api/products';

  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getAuthHeaders() {
    const token = this.getToken();
    if (!token) {
      return {};
    }
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl, this.getAuthHeaders());
  }

  getById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data, this.getAuthHeaders());
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  addProduct(data: any): Observable<any> {
  const token = this.getToken();
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  });

  return this.http.post(this.apiUrl, data, { headers });
}
  getProductOfTheDay(): Observable<any> {
      return this.http.get(`${this.apiUrl}/product-of-the-day`);
    }


}

