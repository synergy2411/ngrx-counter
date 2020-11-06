// Actions
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD_COUNTER';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';

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

export class CounterStoreResult {
  readonly type = STORE_RESULT;
  constructor() {}
}

export type ActionTypes = CounterStoreResult | CounterSubtract| CounterDecrement | CounterAdd | CounterIncrement;
