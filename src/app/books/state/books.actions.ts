import { Book, HttpError } from './books.state';

export enum BooksActionTypes {
    LOAD_BOOKS = '[Books Page] Load Books',
    LOAD_BOOKS_SUCCESS = '[Books API] Load Books Success',
    LOAD_BOOKS_FAILURE = '[Books API] Load Books Failure',
  }

  export class LoadBooks {
    readonly type = BooksActionTypes.LOAD_BOOKS;
  }

  export class LoadBooksSuccess {
    readonly type = BooksActionTypes.LOAD_BOOKS_SUCCESS;
    constructor(public payload: Book[]) {}
  }

  export class LoadBooksFailure {
    readonly type = BooksActionTypes.LOAD_BOOKS_FAILURE;
    constructor(public payload: HttpError) {}
  }

  export type BooksActions = LoadBooks | LoadBooksSuccess | LoadBooksFailure;
