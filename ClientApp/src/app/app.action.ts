import {
  Action,
  ActionCreator
} from 'redux';

export interface MyAction extends Action {
  payload: any,
  callback():any,
}