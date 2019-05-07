import constants from './../constants';
const { initialState } = constants;

const resultsDataReducer = (state = initialState.earthQuakeSites, action) => {
  switch(action.type) {
    case "UPDATE_SITE":
    return 'asdkjahskdjhakjdh';
    default:
    return state;
  }
}

export default resultsDataReducer
