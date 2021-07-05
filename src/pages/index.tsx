import React, { useEffect } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { WeatherNow } from '../components/modules/WeatherNow'
import { BriefWeather } from '../components/modules/BriefWeather'

import { convertTimestampToDate } from '../utils/convertTimestampToDate'
import { provideIconCodeById } from '../utils/provideIconCodeById'

import { apiWeather } from '../services/apiWeather'
import { apiPlaces } from '../services/apiPlaces'

import { Container } from './styles'

const Home = ({
  currentWeather,
  todayWeather,
  tomorrowWeather,
  afterTomorrowWeather
}) => {
  return (
    <Container>
      <Head>
        <title>Home | Next Weather</title>
      </Head>

      <WeatherNow {...currentWeather} />
      <BriefWeather {...todayWeather} />
      <BriefWeather {...tomorrowWeather} />
      <BriefWeather {...afterTomorrowWeather} />
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
    name,
    href: '/'
  }

  const weather = daily.slice(0, 3).map((day, i) => {
    return {
      icon: provideIconCodeById(
        daily[i].weather[0].id,
        convertTimestampToDate(current.dt, 'hours'),
        convertTimestampToDate(current.sunrise, 'hours'),
        convertTimestampToDate(current.sunset, 'hours')
      ),
      tempMax: daily[i].temp.max,
      tempMin: daily[i].temp.min,
      pop: daily[i].pop
    }
  })
  const todayWeather = { ...weather[0], day: 'hoje' }
  const tomorrowWeather = { ...weather[1], day: 'amanhã' }
  const afterTomorrowWeather = {
    ...weather[2],
    day: convertTimestampToDate(daily[2].dt, 'weekDay')
  }

  return {
    props: {
      currentWeather,
      todayWeather,
      tomorrowWeather,
      afterTomorrowWeather
    },
    revalidate: 60 * 5
  }
}

export default Home
