import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs/Observable"
import { Store } from "@ngrx/store";
import { Counter } from '../models/counter.model'
import { AppState } from '../app.state'
import * as CounterActions from '../actions/counter.actions'

@Component({
  selector: 'app-counter-modifier',
  templateUrl: './counter-modifier.component.html',
  styleUrls: ['./counter-modifier.component.scss']
})
export class CounterModifierComponent implements OnInit {

  constructor(private store: Store<AppState>) {

  }

  incrementCounter() {
    this.store.dispatch(new CounterActions.Increment())
  }

  deccrementCounter() {
    this.store.dispatch(new CounterActions.Decrement())
  }

  ngOnInit() {
  }

}
