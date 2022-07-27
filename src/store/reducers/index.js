import { combineReducers } from 'redux';
import searchResults from './searchResultsReducer';

const reducers = { searchResults };

const rootReducer = combineReducers(reducers);
export default rootReducer;
