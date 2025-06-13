import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksState, Book, HttpError } from './books.state';

const getBooksFeatureState = createFeatureSelector<BooksState>('books');

export const getBooks = createSelector(
    getBooksFeatureState,
    (state: BooksState) => state.books
  );

  export const getIsLoading = createSelector(
    getBooksFeatureState,
    (state: BooksState) => state.isLoading
  );

  export const getError = createSelector(
    getBooksFeatureState,
    (state: BooksState) => state.error
  );

  export const getTotalBooksCount = createSelector(
    getBooks,
    (books: Book[]) => books.length
  );

  export const getUniqueAuthors = createSelector(
    getBooks,
    (books: Book[]) => {
      const authors = new Set<string>();
      books.forEach(book => {
        if (book.author_name) {
          book.author_name.forEach(author => authors.add(author));
        }
      });
      return Array.from(authors);
    }
  );

