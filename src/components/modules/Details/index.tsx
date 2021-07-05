import React from 'react'

import { useConversion } from '../../../hooks/useConversion'

import {
  Container,
  RiseSetContainer,
  LightContainer,
  TimesContainer,
  TimeIcon,
  MoonIcon,
  Condition,
  SunProgress
} from './styles'

type DetailsProps = {
  feelsLike: number
  sunrise: number
  sunset: number
  tempMax: number
  tempMin: number
  wind: number
  humidity: number
  dewPoint: number
  pressure: number
  visibility: number
  moonPhase: string[]
  moonrise: number
  moonset: number
  progress: number
  name: string
}

export function Details({
  sunrise,
  sunset,
  tempMax,
  tempMin,
  wind,
  humidity,
  dewPoint,
  pressure,
  moonPhase,
  moonrise,
  moonset,
  progress,
  name
}: DetailsProps) {
  const sunProgressStyle = {
    background: `linear-gradient(0deg, white 50%, transparent 50%),
      linear-gradient(${3.6 * progress}deg, #e97e45 50%, lightgray 50%)`
  }

  const details = [
    {
      condition: 'Temperatura',
      value: `${useConversion(tempMax, 'temp')}/${useConversion(
        tempMin,
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
      condition: 'Pressão',
      value: useConversion(pressure, 'pressure'),
      src: '/gauge.svg'
    },
    {
      condition: 'Ponto de orvalho',
      value: useConversion(dewPoint, 'temp'),
      src: '/dew-point.svg'
    }
  ]

  return (
    <Container>
      <h2>O clima em {name} hoje</h2>

      <ul>
        {details.map((element, i) => {
          return (
            <Condition key={i}>
              <p>
                <img src={element.src} alt="Condição atual" />
                {element.condition}
              </p>
              <span>{element.value}</span>
            </Condition>
          )
        })}
      </ul>

      <RiseSetContainer>
        <LightContainer>
          <strong>Sol</strong>
          <SunProgress style={sunProgressStyle} />

          <TimesContainer>
            <TimeIcon>
              <img src="/sunrise.svg" alt="Alvorada" />
              {sunrise}
            </TimeIcon>
            <TimeIcon>
              <img src="/sunset.svg" alt="Crepúsculo" />
              {sunset}
            </TimeIcon>
          </TimesContainer>
        </LightContainer>

        <LightContainer>
          <strong>Lua</strong>
          <MoonIcon src={moonPhase[1]} />
          <p>{moonPhase[0]}</p>

          <TimesContainer>
            <TimeIcon>
              <img src="/moonrise.svg" alt="Moonrise" />
              {moonrise}
            </TimeIcon>
            <TimeIcon>
              <img src="/moonset.svg" alt="Moonset" />
              {moonset}
            </TimeIcon>
          </TimesContainer>
        </LightContainer>
      </RiseSetContainer>
    </Container>
  )
}
