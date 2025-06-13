// src/app/books-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Book, HttpError } from './books/state/books.state';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  private readonly BOOKS_API_URL = 'https://openlibrary.org/subjects/fiction.json';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<{ works: any[] }>(this.BOOKS_API_URL).pipe(
      map(response => {
       
        return response.map(work => ({
          title: work.title,
          author_name: work.authors && work.authors.length > 0 ? work.authors.map((author: { name: string }) => author.name) : ['Unknown Author'],
          first_publish_year: work.first_publish_year || null
        })) as Book[];
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage: HttpError;

        if (error.error instanceof ErrorEvent) {
          errorMessage = { status: 0, message: `Network error: ${error.error.message}` };
        } else {
          errorMessage = { status: error.status, message: `Server error: ${error.status} - ${error.message || 'Unknown server error.'}` };
        }
        console.error('API Error:', errorMessage);
        return throwError(() => errorMessage);
      })
    );
  }
}