import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {simpleReducer} from './reducers/simple.reducer';
import {postReducer} from './reducers/post.reducer';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(
      {
        simple: simpleReducer,
        post: postReducer
      },
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
