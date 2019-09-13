import { combineReducers, createStore, Reducer } from 'redux';
import { YearsState, YearsReducer } from './year/year.reducer';

interface Threads{

}
export interface AppState {
  years: YearsState,
  threads: Threads
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  years: YearsReducer,
  threads: null
});

export default rootReducer;