import { createReducer, on } from '@ngrx/store';
import { initialBooksState, BooksState } from './books.state';
import { LoadBooks, LoadBooksSuccess, LoadBooksFailure } from './books.actions';

export const booksReducer = createReducer(
  initialBooksState,

  on(LoadBooks, (state: BooksState) => ({
    ...state,
    isLoading: true,
    error: null,
  })),

  on(LoadBooksSuccess, (state: BooksState, { payload }) => ({
    ...state,
    books: payload,
    isLoading: false,
    error: null,
  })),

  on(LoadBooksFailure, (state: BooksState, { payload }) => ({ 
    ...state,
    isLoading: false,
    error: payload,
  }))
);