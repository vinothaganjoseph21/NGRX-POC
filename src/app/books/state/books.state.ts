export interface Book {
    title: string;
    author_name: string[];
    first_publish_year: number;
  }

  export interface HttpError {
    status: number;
    message: string;
  }

  export interface BooksState {
    books: Book[];
    isLoading: boolean;
    error: HttpError | null;
  }

  export const initialBooksState: BooksState = {
    books: [],
    isLoading: false,
    error: null,
  };