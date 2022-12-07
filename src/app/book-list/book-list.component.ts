import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bookList',
  styleUrls: ['./book-list.component.css'],
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit {
  books: Book[];
  ngOnInit(): void {
    this.books = [
      {
        isbn: '12345678',
        title: 'Angular',
        authors: ['Ferdinand Malcher', 'Johannes Hoppe'],
        published: new Date(2020,8,1),
        subtitle: 'Grundlagen, fortgeschrittene Themen und Best Practices',
        rating: 5,
        thumbnails:[] 
      }
    ]
  }
}
