import React from 'react'
import { Card } from '../../elements/Card'

import { TodayDetails } from '../../../types/weather'

import { Upside, Sun, SunTimes, Condition } from './styles'

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
}: TodayDetails) {
  const details = [
    {
      condition: 'Max/mín',
      value: `${todayMax}°/${todayMin}°`,
      src: '/thermometer.svg'
    },
    {
      condition: 'Vento',
      value: `${wind}km/h`,
      src: '/wind.svg'
    },
    {
      condition: 'Umidade',
      value: `${humidity}%`,
      src: '/humidity.svg'
    },
    {
      condition: 'Ponto de orvalho',
      value: `${dewPoint}°`,
      src: '/dew-point.svg'
    },
    {
      condition: 'Pressão',
      value: `${pressure}mb`,
      src: '/gauge.svg'
    },
    {
      condition: 'Visibilidade',
      value: `${visibility}km`,
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
          <span>{feelsLike}°</span>
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
