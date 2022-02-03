import { Component, OnInit } from '@angular/core';
import {BooksService} from "../books.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  currentBook: any;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getBook(this.route.snapshot.paramMap.get('id'));
  }
  // Get Single Book
  getBook(id: string | null): void {
    this.booksService.getSingleBook(id)
      .subscribe(
        (book: null) => {
          this.currentBook = book;
          console.log(book);
        },
        (error: any) => {
          console.log(error);
        });
  }

  // Update Book
  updateBook(): void {
    const data = {
      name: this.currentBook.name,
      description: this.currentBook.description,
    };

    this.booksService.updateBook(this.currentBook.id, this.currentBook)
      .subscribe(
        response => {
          this.router.navigate(['/book-list']);
        });
  }

  // Delete Book
  deleteBook(): void {
    this.booksService.deleteBook(this.currentBook.id)
      .subscribe(
        response => {
          this.router.navigate(['/book-list']);
        });
  }
}
