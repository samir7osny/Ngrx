import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from "@ngrx/store";
import { reducer } from './reducers/counter.reducer';
import { CounterComponent } from './counter/counter.component';
import { CounterModifierComponent } from './counter-modifier/counter-modifier.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterModifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    StoreModule.forRoot({
      counter: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
