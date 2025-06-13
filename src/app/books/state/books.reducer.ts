import { initialBooksState, BooksState, Book, HttpError } from './books.state';
import { BooksActions, BooksActionTypes } from './books.actions';

export function booksReducer(
    state: BooksState = initialBooksState,
    action: BooksActions
): BooksState {
    switch (action.type) {
        case BooksActionTypes.LOAD_BOOKS:
        return {
            ...state,
            isLoading: true,
            error: null,
        }
        case BooksActionTypes.LOAD_BOOKS_SUCCESS:
            return {
              ...state,
              books: action.payload,
              isLoading: false,
              error: null,
            };
        case BooksActionTypes.LOAD_BOOKS_FAILURE:
                return {
                ...state,
                isLoading: false,
                error: action.payload,
      };
    default:
      return state;

    }
}