import constants from './../constants';
const {initialState} = constants;

const cityReducer = (state=initialState.cityName, action) => {
  switch(action.type) {
    case 'GET_CITY':
    return action.cityName
    default:
    return state;
  }
}

export default cityReducer;
