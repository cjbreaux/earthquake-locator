import React from 'react';
import { connect } from 'react-redux';
import {upDateLocation} from '../action'
import UserSearch from './UserSearch'

function EarthQuake({dispatch}) {
  return (
    <div>
      <h1 onClick={()=>dispatch(upDateLocation(2, 10))}>this is earthquake page</h1>
      <UserSearch />
    </div>
  )
}

const mapStateToProps = state => {
  return{
  data: state.earthQuakeData,
  cityName: state.cityReducer
  }
}
export default connect(mapStateToProps)(EarthQuake);
