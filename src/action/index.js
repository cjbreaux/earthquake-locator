export const upDateLocation = (lat, long) => ({
  type: "UPDATE",
  lat,
  long
})

export const getCity = (cityName) => ({
  type: "GET_CITY",
  cityName
})

export const upDateEarthQuakeSites = (earthQuakeSites) => ({
  type: "UPDATE_SITE",
  earthQuakeSites
})

export function getCoordinates(city) {
    return function(dispatch) {
      return fetch('https://www.mapquestapi.com/geocoding/v1/address?key=jQJXPWHIDzs9AtiSjCTPCqWmxz64wLbe&location=' + city
).then(response => response.json(),
      error => console.log('an error occreed.', error)
    ).then(function(response) {
      console.log(response)
      const lat = response.results[0].locations[0].latLng.lat;
      const lng = response.results[0].locations[0].latLng.lng;
      console.log(lat,lng)
      dispatch(upDateLocation(lat,lng));
      getEarthquakeInfo(lat, lng, dispatch);
    })
  }
}

export function getEarthquakeInfo(lat,lng,dispatch) {
  return fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=' + lat + '&longitude='+ lng + '&maxradiuskm=200&endtime=2019-01-01&starttime=2016-01-01&minmagnitude=5').then(
    response => response.json(),
    error => console.log('An error occurred', error)
  ).then(function(response) {
    console.log(response)
    if (response.features.length > 0) {
      let array = [];
      response.features.forEach((eq)=> {
        const lat = eq.geometry.coordinates[0];
        const lng = eq.geometry.coordinates[1];
        const mag = eq.properties.mag;
        const place = eq.properties.place;
        const time = eq.properties.time;
        const site = {lat,lng,mag,place,time};
        array.push(site);
      })
      console.log(array);
      dispatch(upDateEarthQuakeSites(array))
    } else {
      console.log('no matching results')
    }
  })
}
