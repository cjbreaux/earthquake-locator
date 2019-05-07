import React from 'react';
import { connect } from 'react-redux';
import { getCity, getCoordinates, upDateEarthQuakeSites} from './../action';

function UserSearch({dispatch, upDateEarthQuakeSites}) {
  let input;
  return(
    <div>
      <form onSubmit={e => {
          e.preventDefault();
          console.log(input.value)
          dispatch(getCity(input.value));
          dispatch(getCoordinates(input.value));
          dispatch(upDateEarthQuakeSites);
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

export default connect(mapStateToProps)(UserSearch);
