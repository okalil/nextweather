import axios from 'axios'

export const apiWeather = axios.create({
  baseURL: 'http://api.openweathermap.org/',
  params: {
    appid: process.env.REACT_APP_APPID
  }
})
