import constants from './../constants';
const { initialState } = constants;

const resultsDataReducer = (state = initialState.earthQuakeSites, action) => {
  switch(action.type) {
    case "UPDATE_SITE":

    return [...state,action.earthQuakeSites];
    default:
    return state;
  }
}

export default resultsDataReducer
