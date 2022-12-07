import { Component } from "@angular/core";
import { Book } from "../shared/book";

@Component({
  selector: 'book-list',
  styleUrls:['./book-list.component.css'],
  templateUrl:'./book-list.component.html'
})
export class BookListComponent{
 books: Book[]
}