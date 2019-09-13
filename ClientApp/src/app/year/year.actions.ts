import {
  Action,
  ActionCreator
} from 'redux';

import {
  Year
} from './year.model';

export const Add_New_Year = '[Year] New Year';
export interface AddNewYear extends Action {
}
export const addNewYear: ActionCreator<AddNewYear> =
  () => ({
    type: Add_New_Year,
  });

export const Fetching_Years = '[Year] Fetch Years';
export interface FetchingYears extends Action {
}
export const fetchingYears: ActionCreator<FetchingYears> =
  () => ({
    type: Fetching_Years,
  });