import { createAction, props } from '@ngrx/store';
import { Book, HttpError } from './books.state';

export const LoadBooks = createAction(
  '[Books Page] Load Books'
);

export const LoadBooksSuccess = createAction(
  '[Books API] Load Books Success',
  props<{ payload: Book[] }>() 
);

export const LoadBooksFailure = createAction(
  '[Books API] Load Books Failure',
  props<{ payload: HttpError }>() 
);
