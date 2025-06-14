// src/app/books/state/books.effects.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  LoadBooks,        
  LoadBooksSuccess, 
  LoadBooksFailure, 
} from './books.actions'; 
import { BooksApiService } from '../../shared/services/books-api.service';
import { HttpError } from './books.state';

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions,
    private booksApiService: BooksApiService
  ) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadBooks),
      switchMap(() =>
        this.booksApiService.getBooks().pipe(
          map((books: any) => LoadBooksSuccess({ payload: books })), 
          catchError((err: unknown) => {
            let httpError: HttpError;

            if (typeof err === 'object' && err !== null && 'status' in err && 'message' in err) {
              httpError = err as HttpError;
            } else if (err instanceof Error) {
              httpError = { status: 0, message: err.message || 'An unexpected JavaScript error occurred.' };
            } else {
              httpError = { status: 0, message: 'An unknown error occurred.' };
            }
            return of(LoadBooksFailure({ payload: httpError }));
          })
        )
      )
    )
  );
}