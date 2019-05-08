import constants from './../constants';
const { initialState } = constants;

 const EarthQuakeReducer = (state = initialState.location, action) => {
   switch(action.type) {
     case "UPDATE":
     let newLocation = Object.assign({}, state, {
       lat: action.lat,
       long: action.long
     })
     return newLocation;
     default:
     return state;
   }
 }

 export default EarthQuakeReducer;
