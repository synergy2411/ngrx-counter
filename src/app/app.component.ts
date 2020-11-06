import { CounterState } from './model/counter.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'counter-app';
  counter = 0;

  constructor(private store: Store<any>) {}
  ngOnInit(){
    this.store.subscribe(state => {
      console.log(state);
      this.counter = state.reducer.counter;
    })
  }
}
