import axios from 'axios'

export const apiPlaces = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    access_token: process.env.REACT_APP_ACCESS_TOKEN
  }
})
