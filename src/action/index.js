export const upDateLocation = (lat, long) => ({
  type: "UPDATE",
  lat,
  long
})

export const getCity = (cityName) => ({
  type: "GET_CITY",
  cityName
})
