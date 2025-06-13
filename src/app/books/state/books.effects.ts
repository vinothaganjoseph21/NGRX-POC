import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  BooksActionTypes,
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
      ofType(BooksActionTypes.LOAD_BOOKS),
      switchMap(() =>
        this.booksApiService.getBooks().pipe(
          map((books: any) => new LoadBooksSuccess(books)),
          catchError((err: unknown) => {
            let httpError: HttpError;

            if (typeof err === 'object' && err !== null && 'status' in err && 'message' in err) {
              httpError = err as HttpError;
            } else if (err instanceof Error) {
              httpError = { status: 0, message: err.message || 'An unexpected JavaScript error occurred.' };
            } else {
              httpError = { status: 0, message: 'An unknown error occurred.' };
            }
            return of(new LoadBooksFailure(httpError));
          })
        )
      )
    )
  );
}