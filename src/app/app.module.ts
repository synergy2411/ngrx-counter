import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { rootReducer } from './store/reducers/root.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({reducer : rootReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
