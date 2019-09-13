import { Action } from 'redux';
import * as YearActions from './year.actions';
import { Year } from './year.model';



export interface YearsState {
  years: Year[];
};

const initialState: YearsState = {
  years: null
};

export const YearsReducer =
  function (state: YearsState = initialState, action: Action): YearsState {
    switch (action.type) {
      case YearActions.Add_New_Year:
        if (!state.years || state.years.length == 0) return state;
        var lastYear = state.years[state.years.length - 1];
        const newYear: Year = { year: lastYear.year + 1, isCurrent: false };
        var years = [...state.years,newYear];

        return {
          years:years
        };
      default:
        return state;
    }
  };