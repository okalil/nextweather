import React from 'react'

import { CurrentWeather } from '../../../types/weather'

import { Container, Conditions } from './styles'

type WeatherNowProps = CurrentWeather

export function WeatherNow({
  temp,
  weatherDescription,
  icon,
  todayMax,
  todayMin,
  todayProb,
  name
}: WeatherNowProps) {
  return (
    <Container>
      <h2>Clima em {name}</h2>
      <p>Até agora a pouco</p>

      <Conditions>
        <div>
          <span>{temp}°</span>
          <p>{weatherDescription}</p>
        </div>
        <div>
          <img
            src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
            alt="Tempo agora"
          />
          <span>
            {todayMax}°/{todayMin}°
          </span>
        </div>
      </Conditions>
      <span>{todayProb} % de probab. de chuva até agora</span>
    </Container>
  )
}
