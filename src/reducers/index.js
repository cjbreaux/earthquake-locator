import { combineReducers } from 'redux';
import earthQuakeReducer from './earthQuakeReducer';
import cityReducer from './cityReducer';
import resultsDataReducer from './resultsDataReducer';

const rootReducer = combineReducers({
  location: earthQuakeReducer,
  cityName: cityReducer,
  eqSites: resultsDataReducer
});

export default rootReducer;
