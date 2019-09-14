import { Component, OnInit, Inject } from '@angular/core';
import { AppStore } from '../app.store';
import * as Redux from 'redux';
import { AppState } from '../app.reducer';
import { Year } from '../year/year.model';
import * as YearActions from '../Year/year.actions';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-from-year',
  templateUrl: './from-year.component.html',
  styleUrls: ['./from-year.component.css']
})
export class FromYearComponent implements OnInit {

  years: Year[];

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>,private service: ApiService) {
    store.subscribe(() => this.updateState());
    this.updateState();
  }

  ngOnInit() {
    this.store.dispatch(YearActions.fetchingYears(this.service,this.store.dispatch));
  }

  updateState() {
    const state = this.store.getState();
    this.years = state.years.years;
  }

}
