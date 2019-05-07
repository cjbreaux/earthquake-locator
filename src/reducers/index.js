import { combineReducers } from 'redux';
import earthQuakeReducer from './earthQuakeReducer';
import cityReducer from './cityReducer';

const rootReducer = combineReducers({
  earthQuakeData: earthQuakeReducer,
  cityName: cityReducer
});

export default rootReducer;
