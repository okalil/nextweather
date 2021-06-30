import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { WeatherNow } from '../components/modules/WeatherNow'
import { Forecast } from '../components/modules/Forecast'
import { Details } from '../components/modules/Details'

import { convertTimestampToDate } from '../utils/convertTimestampToDate'
import { provideIconCodeById } from '../utils/provideIconCodeById'
import { provideMoonPhaseByFraction } from '../utils/provideMoonPhaseByFraction'

import { apiWeather } from '../services/apiWeather'
import { apiPlaces } from '../services/apiPlaces'

import { Container } from './styles'

const Home = ({ currentWeather, dailyForecast, todayDetails }) => {
  return (
    <Container>
      <Head>
        <title>Home | Nextweather</title>
      </Head>

      <WeatherNow {...currentWeather} />
      <Forecast {...dailyForecast} />
      <Details {...todayDetails} />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const geo = await apiPlaces.get(`brasilia.json`, {
    params: {
      types: 'place',
      language: 'pt'
    }
  })

  const { data } = await apiWeather.get('data/2.5/onecall', {
    params: {
      lat: geo.data.features[0].center[1],
      lon: geo.data.features[0].center[0],
      exclude: 'minutely,hourly,alerts',
      units: 'metric',
      lang: 'pt_br'
    }
  })

  const name = geo.data.features[0].text
  const { current, daily } = data

  const todayMax = daily[0].temp.max.toFixed()
  const todayMin = daily[0].temp.min.toFixed()

  const currentWeather = {
    temp: current.temp.toFixed(),
    weatherDescription: current.weather[0].description,
    icon: provideIconCodeById(
      current.weather[0].id,
      convertTimestampToDate(current.dt, 'hours'),
      convertTimestampToDate(current.sunrise, 'hours'),
      convertTimestampToDate(current.sunset, 'hours')
    ),
    todayMax,
    todayMin,
    todayProb: daily[0].pop.toFixed(),
    name
  }

  const todayDetails = {
    feelsLike: current.feels_like.toFixed(),
    sunrise: convertTimestampToDate(current.sunrise, 'time'),
    sunset: convertTimestampToDate(current.sunset, 'time'),
    todayMax,
    todayMin,
    wind: (current.wind_speed * 3.6).toFixed(),
    humidity: current.humidity,
    dewPoint: current.dew_point.toFixed(),
    pressure: current.pressure,
    visibility: current.visibility / 1000,
    moonPhase: provideMoonPhaseByFraction(daily[0].moon_phase),
    name
  }

  const dailyForecast = {
    forecast: daily.slice(0, 5).map(
      (
        day: {
          dt: number
          temp: { max: number; min: number }
          weather: { id: number }[]
          pop: number
        },
        i: number
      ) => {
        return {
          dt: i > 0 ? convertTimestampToDate(day.dt, 'date') : 'Hoje',
          tempMax: day.temp.max.toFixed(),
          tempMin: day.temp.min.toFixed(),
          icon: provideIconCodeById(
            day.weather[0].id,
            convertTimestampToDate(current.dt, 'hours'),
            convertTimestampToDate(current.sunrise, 'hours'),
            convertTimestampToDate(current.sunset, 'hours')
          ),
          prob: day.pop.toFixed()
        }
      }
    ),
    name
  }

  return {
    props: {
      currentWeather,
      todayDetails,
      dailyForecast
    },
    revalidate: 60 * 5
  }
}

export default Home
