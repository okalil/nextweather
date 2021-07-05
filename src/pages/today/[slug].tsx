import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { apiWeather } from '../../services/apiWeather'
import { apiPlaces } from '../../services/apiPlaces'

import { WeatherNow } from '../../components/modules/WeatherNow'
import { HourlyForecast } from '../../components/modules/HourlyForecast'
import { Details } from '../../components/modules/Details'

import { convertTimestampToDate } from '../../utils/convertTimestampToDate'
import { provideIconCodeById } from '../../utils/provideIconCodeById'
import { provideMoonPhaseByFraction } from '../../utils/provideMoonPhaseByFraction'
import { calculateSunProgress } from '../../utils/calculateSunProgress'

import { Container } from '../styles'

const Today = ({ currentWeather, hourlyForecast, todayDetails, name }) => {
  return (
    <Container>
      <Head>
        <title>Tempo hoje | {name}</title>
      </Head>

      <WeatherNow {...currentWeather} />
      <HourlyForecast {...hourlyForecast} />
      <Details {...todayDetails} />
    </Container>
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
      exclude: 'minutely,alerts',
      units: 'metric',
      lang: 'pt_br'
    }
  })

  const { current, daily, hourly } = data

  const description = current.weather[0].description
  const currentWeather = {
    temp: current.temp,
    feelsLike: current.feels_like,
    weatherDescription:
      description.charAt(0).toUpperCase() + description.slice(1),
    icon: provideIconCodeById(
      current.weather[0].id,
      convertTimestampToDate(current.dt, 'hours'),
      convertTimestampToDate(current.sunrise, 'hours'),
      convertTimestampToDate(current.sunset, 'hours')
    ),
    wind: current.wind_speed,
    humidity: current.humidity,
    pressure: current.pressure,
    dewPoint: current.dew_point,
    uvi: current.uvi,
    visibility: current.visibility,
    name,
    href: '/today'
  }

  const hourlyForecast = {
    forecast: hourly
      .slice(0, 14)
      .filter((item, i: number) => i % 3 == 0)
      .map(
        (hour: {
          dt: number
          weather: { id: number }[]
          temp: number
          pop: number
        }) => {
          return {
            dt: convertTimestampToDate(hour.dt, 'time'),
            icon: provideIconCodeById(
              hour.weather[0].id,
              convertTimestampToDate(hour.dt, 'hours'),
              convertTimestampToDate(current.sunrise, 'hours'),
              convertTimestampToDate(current.sunset, 'hours')
            ),
            temp: hour.temp,
            pop: hour.pop
          }
        }
      ),
    name
  }

  const todayDetails = {
    progress: calculateSunProgress(
      Number(convertTimestampToDate(current.dt, 'hours')),
      Number(convertTimestampToDate(daily[0].sunrise, 'hours')),
      Number(convertTimestampToDate(daily[0].sunset, 'hours'))
    ),
    sunrise: convertTimestampToDate(daily[0].sunrise, 'time'),
    sunset: convertTimestampToDate(daily[0].sunset, 'time'),
    tempMax: daily[0].temp.max,
    tempMin: daily[0].temp.min,
    wind: daily[0].wind_speed,
    humidity: daily[0].humidity,
    dewPoint: daily[0].dew_point,
    pressure: daily[0].pressure,
    moonPhase: provideMoonPhaseByFraction(daily[0].moon_phase),
    moonrise: convertTimestampToDate(daily[0].moonrise, 'time'),
    moonset: convertTimestampToDate(daily[0].moonset, 'time'),
    name
  }

  return {
    props: {
      currentWeather,
      todayDetails,
      hourlyForecast,
      name
    }
  }
}

export default Today
