import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { apiWeather } from '../../services/apiWeather'
import { apiPlaces } from '../../services/apiPlaces'

import { WeatherNow } from '../../components/modules/WeatherNow'
import { Forecast } from '../../components/modules/Forecast'
import { Details } from '../../components/modules/Details'

import { convertTimestampToDate } from '../../utils/convertTimestampToDate'
import { provideIconCodeById } from '../../utils/provideIconCodeById'
import { provideMoonPhaseByFraction } from '../../utils/provideMoonPhaseByFraction'

import { Container } from '../styles'

const Today = ({ currentWeather, dailyForecast, todayDetails, name }) => {
  return (
    <div>
      <Head>
        <title>Tempo | {name}</title>
      </Head>

      <Container>
        <WeatherNow {...currentWeather} />
        <Forecast {...dailyForecast} />
        <Details {...todayDetails} />
      </Container>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const local = context.query.slug

  const geo = await apiPlaces.get(`${local}.json`, {
    params: {
      types: 'place',
      language: 'pt'
    }
  })

  if (!geo.data.features[0]) {
    return {
      notFound: true
    }
  }

  const info = geo.data.features[0]
  const shortCode = info.place_name.endsWith('Brasil')
    ? info.context[0].short_code?.split('-')[1]
    : info.context[1]?.text || info.context[0]?.text
  const name = `${geo.data.features[0].text}, ${shortCode}`

  const { data } = await apiWeather.get('data/2.5/onecall', {
    params: {
      lat: geo.data.features[0].center[1],
      lon: geo.data.features[0].center[0],
      exclude: 'minutely,hourly,alerts',
      units: 'metric',
      lang: 'pt_br'
    }
  })

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
      dailyForecast,
      name
    }
  }
}

export default Today
