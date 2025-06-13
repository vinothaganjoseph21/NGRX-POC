import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book, HttpError } from '../../books/state/books.state';

@Injectable({
    providedIn: 'root'
  })

  export class BooksApiService {
    constructor() { } 
    getBooks(): Observable<Book[]> {
        return new Observable(observer => {
          setTimeout(() => {
            const dummyBooks: Book[] = [
              { title: 'The Hobbit', author_name: ['J.R.R. Tolkien'], first_publish_year: 1937 },
              { title: 'The Lord of the Rings', author_name: ['J.R.R. Tolkien'], first_publish_year: 1954 },
              { title: 'Pride and Prejudice', author_name: ['Jane Austen'], first_publish_year: 1813 },
              { title: '1984', author_name: ['George Orwell'], first_publish_year: 1949 },
              { title: 'Animal Farm', author_name: ['George Orwell'], first_publish_year: 1945 },
              { title: 'To Kill a Mockingbird', author_name: ['Harper Lee'], first_publish_year: 1960 },
            ];
            observer.next(dummyBooks);
            observer.complete();
    
            const apiError: HttpError = { status: 500, message: 'Internal Server Error: Could not fetch books from API.' };
            observer.error(apiError);
          }, 1000);
        });
      }
  }