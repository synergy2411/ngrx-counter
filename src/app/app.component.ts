import { CounterState } from './model/counter.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as counterActions from './store/actions/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'counter-app';
  counter = 0;

  constructor(private store: Store<any>) {}
  ngOnInit() {
    this.store.subscribe(state => {
      this.counter = state.reducer.counter;
    });
  }

  onIncrement() {
    // this.store.dispatch({type : counterActions.INCREMENT});
    this.store.dispatch(new counterActions.CounterIncrement());
  }

  onDecrement() {
    this.store.dispatch(new counterActions.CounterDecrement());
  }

  onAdd(value: number) {
    this.store.dispatch(new counterActions.CounterAdd(value));
  }

  onSubtract(value: number) {
    this.store.dispatch(new counterActions.CounterSubtract(value));
  }
}
