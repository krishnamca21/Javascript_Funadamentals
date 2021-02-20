import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JavascriptFundamentalsComponent } from './javascript-fundamentals/javascript-fundamentals.component';

@NgModule({
  declarations: [
    AppComponent,
    JavascriptFundamentalsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
