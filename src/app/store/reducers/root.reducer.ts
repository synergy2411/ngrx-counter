// import { Action } from '@ngrx/store';
import { CounterState } from '../../model/counter.model';
import * as counterActions from '../actions/counter.actions';

const initialState = {
  counter: 100,
};

export function rootReducer(
  state: CounterState = initialState,
  action: counterActions.ActionTypes
) {
  switch (action.type) {
    case counterActions.INCREMENT:
      return {
        counter: state.counter + 1,
      };
    case counterActions.DECREMENT:
      return {
        counter: state.counter - 1,
      };
    case counterActions.ADD:
      return {
        counter : state.counter + action.value
      }
    case counterActions.SUBTRACT:
      return {
        counter : state.counter - action.value
      }
    default:
      return state;
  }

}
