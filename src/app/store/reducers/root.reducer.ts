// import { Action } from '@ngrx/store';
import { CounterState } from '../../model/counter.model';
import * as counterActions from '../actions/counter.actions';

const initialState = {
  counter: 100,
  results : []
};

export function rootReducer(
  state: CounterState = initialState,
  action: counterActions.ActionTypes
) {
  switch (action.type) {
    case counterActions.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case counterActions.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case counterActions.ADD:
      return {
        ...state,
        counter : state.counter + action.value
      };
    case counterActions.SUBTRACT:
      return {
        ...state,
        counter : state.counter - action.value
      };
    case counterActions.STORE_RESULT:
        return {
          ...state,
            // results : state.results.push(state.counter)
            results : [...state.results, state.counter]
        }
    default:
      return state;
  }

}
