import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common'; 

import {
  getTotalBooksCount,
  getUniqueAuthors,
  getIsLoading,
  getError,
} from './state/books.selectors';
import { LoadBooks } from './state/books.actions';
import { BooksState, HttpError } from './state/books.state';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Book Information Dashboard</h1>
    <button (click)="onLoadBooks()" [disabled]="isLoading$ | async">
      {{ (isLoading$ | async) ? 'Loading Books...' : 'Load Books' }}
    </button>

    <div *ngIf="error$ | async as error" style="color: red; margin-top: 15px;">
      <h3>Error!</h3>
      <p>Message: {{ error.message }}</p>
      <p>Status: {{ error.status }}</p>
    </div>

    <div *ngIf="((totalBooksCount$ | async) ?? 0)> 0 && !(isLoading$ | async)" style="margin-top: 20px;">
      <h2>Book Statistics</h2>
      <p><strong>Total Books Found:</strong> {{ totalBooksCount$ | async }}</p>

      <h3>Unique Authors:</h3>
      <ul>
      {{ (uniqueAuthors$ | async)?.length }} authors. <ul>
        <li *ngFor="let author of uniqueAuthors$ | async">
          {{ author }}
        </li>
      </ul>
    </div>

    <div *ngIf="!(isLoading$ | async) && (totalBooksCount$ | async) === 0 && !(error$ | async)" style="margin-top: 15px;">
      <p>Click 'Load Books' to fetch data.</p>
    </div>
  `,
  styles: [`
    h1 { color: #333; }
    h2, h3 { color: #555; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 20px; }
    button { padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; }
    button:disabled { background-color: #cccccc; cursor: not-allowed; }
    ul { list-style-type: disc; padding-left: 20px; }
    li { margin-bottom: 5px; }
  `]
})
export class BooksComponent implements OnInit {
  totalBooksCount$: Observable<number>;
  uniqueAuthors$: Observable<string[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<HttpError | null>;

  constructor(private store: Store<BooksState>) {
    this.totalBooksCount$ = this.store.select(getTotalBooksCount);
    this.uniqueAuthors$ = this.store.select(getUniqueAuthors);
    this.isLoading$ = this.store.select(getIsLoading);
    this.error$ = this.store.select(getError);
  }

  ngOnInit(): void {
  }

  onLoadBooks(): void {
    this.store.dispatch(new LoadBooks());
  }
}