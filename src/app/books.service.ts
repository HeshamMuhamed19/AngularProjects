import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  apiUrl: string = "http://localhost:3000/books";

  constructor(private httpClient: HttpClient) {
  }

  // Get All Books
  getAllBooks(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  // Get Specific Book
  getSingleBook(id: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`);
  }

  // Create New Book
  createNewBook(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, data);
  }

  // Update New Book
  updateBook(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, data);
  }

  // Delete Book
  deleteBook(id: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  // Search By Title
  // Search By Name
  filterByTitle(title: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?title_like=${title}`);
  }
}
