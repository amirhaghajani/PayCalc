import {
  ActionCreator
} from 'redux';

import {
  Year
} from './year.model';
import { ApiService } from '../api.service';
import { MyAction } from '../app.action';


export const Add_New_Year = '[Year] New Year';
export interface AddNewYear extends MyAction {
}
export const addNewYear: ActionCreator<AddNewYear> =
  () => ({
    type: Add_New_Year,
    callback: null,
    payload: null,
  });

export const Fetched_Years = '[Year] Fetched Years';
export interface FetchedYears extends MyAction {
}
export const fetchedYears: ActionCreator<FetchedYears> =
  (data) => ({
    type: Fetched_Years,
    callback: null,
    payload: data
  });

export const Fetching_Years = '[Year] Fetching Years';
export interface FetchingYears extends MyAction {
}
export const fetchingYears: ActionCreator<FetchingYears> =
  (apiService: ApiService, storeDispatch: any) => {
    return {
      type: Fetching_Years,
      payload: null,
      callback: () => {
        apiService.getContacts().subscribe((res) => {
          if(storeDispatch) storeDispatch(fetchedYears(res));
        });
      }
    };
  };