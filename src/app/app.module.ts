// src/app/app.module.ts

import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; 
import { BooksModule } from './books/books.module'; 

@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    CommonModule, 
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BooksModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }