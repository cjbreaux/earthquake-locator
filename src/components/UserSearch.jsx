import React from 'react';
import { connect } from 'react-redux';
import { getCity, getCoordinates} from './../action';

function UserSearch({dispatch, updateSite}) {
  let input;
  return(
    <div>
      <form onSubmit={e => {
          e.preventDefault();
          console.log(input.value)
          dispatch(getCity(input.value));
          dispatch(getCoordinates(input.value));
          // dispatch({type: 'UPDATE_SITE'})
        }}>
        <input placeholder="enter a location" ref={node => {
            input = node;
          }}></input>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return{
  data: state.earthQuakeData,
  cityName: state.cityReducer,
  eqSites: state.resultsDataReducer
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateSite: (site) => dispatch({type:'UPDATE_SITE', site})
//   }
// }
export default connect(mapStateToProps)(UserSearch);
