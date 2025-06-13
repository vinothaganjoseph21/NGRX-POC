

import { Component } from '@angular/core';
import { BooksComponent } from "./books/books.component";

@Component({
  selector: 'app-root',
  template: `
    <header style="background-color: #f0f0f0; padding: 20px; text-align: center;">
      <h1>My Angular App</h1>
    </header>
    <main style="padding: 20px;">
      <app-books></app-books> </main>
    <footer style="background-color: #f0f0f0; padding: 10px; text-align: center; margin-top: 30px;">
      <p>&copy; 2025 My App</p>
    </footer>
  `,
  styles: [],
  imports: [BooksComponent]
})
export class AppComponent {
  title = 'NgRx Example';
}