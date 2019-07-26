import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Counter } from '../models/counter.model'

export const IncrementAction = 'Counter INC'
export const DecrementAction = 'Counter DEC'

export class Increment implements Action {
  type: string = IncrementAction;
  constructor() {}
}

export class Decrement implements Action {
  type: string = DecrementAction;
  constructor() {}
}

export type Actions = Increment | Decrement
