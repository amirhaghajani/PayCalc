import { Action } from 'redux';
import * as YearActions from './year.actions';
import { Year } from './year.model';
import { MyAction } from '../app.action';



export interface YearsState {
  years: Year[],
  isLoading: boolean
};

const initialState: YearsState = {
  years: null,
  isLoading: false
};

export const YearsReducer =
  function (state: YearsState = initialState, action: MyAction): YearsState {
    switch (action.type) {
      case YearActions.Add_New_Year: {
        if (!state.years || state.years.length == 0) return state;

        var lastYear = state.years[state.years.length - 1];
        const newYear: Year = { year: lastYear.year + 1, isCurrent: false };
        const years: Year[] = [...state.years, newYear];

        return {
          years: years,
          isLoading: false
        };
      }

      case YearActions.Fetching_Years:
        {
          let years: Year[] = null;
          if (state.years && state.years.length > 0) years = [...state.years]
          if (action.callback) action.callback();
          
          return {
            years: years,
            isLoading: true
          };
        }

      case YearActions.Fetched_Years: {
        const years: any = action.payload;

        return {
          years: years,
          isLoading: false
        }
      }

      default:
        return state;
    }
  };