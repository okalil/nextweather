import React from 'react'

import { useConversion } from '../../../hooks/useConversion'

import { Container, Conditions } from './styles'

type WeatherNowProps = {
  temp: number
  weatherDescription: string
  icon: string
  todayMax: number
  todayMin: number
  todayProb: number
  name: string
}

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
          <span>{useConversion(temp, 'temp')}</span>
          <p>{weatherDescription}</p>
        </div>
        <div>
          <img
            src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
            alt="Tempo agora"
          />
          <span>
            {useConversion(todayMax, 'temp')}/{useConversion(todayMin, 'temp')}
          </span>
        </div>
      </Conditions>
      <span>{todayProb} % de probab. de chuva até agora</span>
    </Container>
  )
}
