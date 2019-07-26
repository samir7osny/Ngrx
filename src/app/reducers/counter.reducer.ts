import { Action } from "@ngrx/store"
import { Counter } from "../models/counter.model"
import * as CounterActions from "../actions/counter.actions";

const InitialCounter: Counter = {
  value: 0
}

export function reducer(state: Counter = InitialCounter, action: CounterActions.Actions) {
  switch (action.type) {
    case CounterActions.IncrementAction:
      state.value = state.value + 1
      return state
    case CounterActions.DecrementAction:
      state.value = state.value - 1
      return state
    default:
      return state
  }
}
