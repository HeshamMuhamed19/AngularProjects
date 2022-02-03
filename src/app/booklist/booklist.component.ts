import { Component, OnInit } from '@angular/core';
import {BooksService} from "../books.service";

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {
  books : any;
  searchTitle = '';
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    // Get All Books
    this.getBooks();
  }
  // Get All Books
  getBooks(){
    this.booksService.getAllBooks()
      .subscribe(
        (books: any) => {
          this.books = books;
        },
        (error: any) => {
          console.log(error);
        });
  }
  // Delete Book
  deleteBook(id:number){
    this.booksService.deleteBook(id)
      .subscribe(
        response => {
          this.getBooks();
        },
        error => {
          console.log(error);
        });
  }


  // Search By Name

  // Search items
  searchByTitle(): void {
    this.booksService.filterByTitle(this.searchTitle)
      .subscribe(
        books => {
          this.books = books;
        },
        error => {
          console.log(error);
        });
  }

}
