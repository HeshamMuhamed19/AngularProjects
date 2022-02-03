import { Component, OnInit } from '@angular/core';
import {BooksService} from "../books.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

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

}
