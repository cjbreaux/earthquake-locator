import constants from './../constants';
const { initialState } = constants;

 const EarthQuakeReducer = (state = initialState, action) => {
   switch(action.type) {
     case "UPDATE":
     let newLocation = Object.assign({}, state.location, {
       lat: action.lat,
       long: action.long
     })
     let newState = Object.assign({}, state, {
       location: newLocation
     })
     return newState;
     default:
     return state;
   }
 }

 export default EarthQuakeReducer
