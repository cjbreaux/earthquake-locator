import React from 'react';
import { connect } from 'react-redux';
import { getCity, getCordinates} from './../action';

function UserSearch({dispatch, cityName}) {
  let input;
  return(
    <div>
      <form onSubmit={e => {
          e.preventDefault();
          console.log(input.value)
          dispatch(getCity(input.value));
          dispatch(getCordinates(input.value));
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
  cityName: state.cityReducer
  }
}

export default connect(mapStateToProps)(UserSearch);
