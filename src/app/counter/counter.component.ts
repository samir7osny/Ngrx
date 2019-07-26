import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs/Observable"
import { Store } from "@ngrx/store";
import { Counter } from '../models/counter.model'
import { AppState } from '../app.state'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter: Observable<Counter> ;

  constructor(private store: Store<AppState>) {
    this.counter = store.select('counter')
  }

  ngOnInit() {
  }

}
