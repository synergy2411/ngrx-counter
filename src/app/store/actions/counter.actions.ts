// Actions
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD_COUNTER';
export const SUBTRACT = 'SUBTRACT';


// Action Creators

export class CounterIncrement {
  readonly type = INCREMENT;
  constructor() {}
}

export class CounterDecrement {
  readonly type = DECREMENT;
  constructor() {}
}

export class CounterAdd {
  readonly type = ADD;
  constructor(public value: number) {}
}

export class CounterSubtract {
  readonly type = SUBTRACT;
  constructor(public value: number) {}
}

export type ActionTypes = CounterSubtract| CounterDecrement | CounterAdd | CounterIncrement;
