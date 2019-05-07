export const upDateLocation = (lat, long) => ({
  type: "UPDATE",
  lat,
  long
})

export const getCity = (cityName) => ({
  type: "GET_CITY",
  cityName
})

export function getCordinates(city) {
    return function(dispatch) {
      return fetch('https://www.mapquestapi.com/geocoding/v1/address?key=jQJXPWHIDzs9AtiSjCTPCqWmxz64wLbe&location=' + city
).then(response => response.json(),
      error => console.log('an error occreed.', error)
    ).then(function(response) {
      console.log(response)
    })
  }
}
