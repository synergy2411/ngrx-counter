import { Action } from '@ngrx/store';
import { CounterState } from '../../model/counter.model';

const initialState = {
  counter : 100
};

export function rootReducer(state: CounterState = initialState, action: Action) {
  return state;
}
