import React from 'react'
import { useConversion } from '../../../hooks/useConversion'

import { Card } from '../../elements/Card'

import { Upside, Sun, SunTimes, Condition } from './styles'

type Details = {
  feelsLike: number
  sunrise: number
  sunset: number
  todayMax: number
  todayMin: number
  wind: number
  humidity: number
  dewPoint: number
  pressure: number
  visibility: number
  moonPhase: number
  name: string
}

export function Details({
  feelsLike,
  sunrise,
  sunset,
  todayMax,
  todayMin,
  wind,
  humidity,
  dewPoint,
  pressure,
  visibility,
  moonPhase,
  name
}: Details) {
  const details = [
    {
      condition: 'Temperatura',
      value: `${useConversion(todayMax, 'temp')}/${useConversion(
        todayMin,
        'temp'
      )}`,
      src: '/thermometer.svg'
    },
    {
      condition: 'Vento',
      value: useConversion(wind, 'speed'),
      src: '/wind.svg'
    },
    {
      condition: 'Umidade',
      value: `${humidity}%`,
      src: '/humidity.svg'
    },
    {
      condition: 'Ponto de orvalho',
      value: useConversion(dewPoint, 'temp'),
      src: '/dew-point.svg'
    },
    {
      condition: 'Pressão',
      value: useConversion(pressure, 'pressure'),
      src: '/gauge.svg'
    },
    {
      condition: 'Visibilidade',
      value: useConversion(visibility, 'length'),
      src: '/eye.svg'
    },
    {
      condition: 'Fase da Lua',
      value: moonPhase,
      src: '/first-quarter.svg'
    }
  ]

  return (
    <Card>
      <h2>O clima em {name} hoje</h2>
      <Upside>
        <div>
          <span>{useConversion(feelsLike, 'temp')}</span>
          <p>Sensação térmica</p>
        </div>

        <div>
          <Sun>
            <img src="/sun-icon.svg" alt="Ícone do Sol" />
          </Sun>

          <SunTimes>
            <div>
              <img src="/sunrise.svg" alt="Alvorada" />
              <p>{sunrise}</p>
            </div>
            <div>
              <img src="/sunset.svg" alt="Crepúsculo" />
              <p>{sunset}</p>
            </div>
          </SunTimes>
        </div>
      </Upside>
      <ul>
        {details.map((element, i) => {
          return (
            <Condition key={i}>
              <img src={element.src} alt="Condição atual" />
              <p>{element.condition}</p>
              <span>{element.value}</span>
            </Condition>
          )
        })}
      </ul>
    </Card>
  )
}
