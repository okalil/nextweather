import React, { useState } from 'react'
import Link from 'next/link'
import { useConversion } from '../../../hooks/useConversion'

import {
  Container,
  UpsideConditions,
  Temperature,
  Weather,
  Button,
  ButtonItem,
  ConditionItem,
  ShowDetails
} from './styles'

type WeatherNowProps = {
  temp: number
  feelsLike: number
  weatherDescription: string
  icon: string
  wind: number
  humidity: number
  pressure: number
  dewPoint: number
  uvi: number
  visibility: number
  name: string
  href: string
}

export function WeatherNow({
  temp,
  feelsLike,
  weatherDescription,
  icon,
  wind,
  humidity,
  pressure,
  dewPoint,
  uvi,
  visibility,
  name,
  href
}: WeatherNowProps) {
  const [isOpen, setIsOpen] = useState(false)

  const briefConditions = [
    { condition: 'Vento', value: useConversion(wind, 'speed') },
    { condition: 'Umidade', value: humidity + '%' }
  ]

  const allConditions = [
    ...briefConditions,
    { condition: 'Pressão', value: useConversion(pressure, 'pressure') },
    { condition: 'Ponto de orvalho', value: useConversion(dewPoint, 'temp') },
    { condition: 'Índice UV', value: uvi },
    { condition: 'Visibilidade', value: useConversion(visibility, 'length') }
  ]

  return (
    <Container>
      <h2>Clima em {name} agora</h2>

      <UpsideConditions>
        <Temperature>
          <span>{useConversion(temp, 'temp')}</span>
          <p>
            Sensação de <span>{useConversion(feelsLike, 'temp')}</span>
          </p>
        </Temperature>
        <Weather>
          <img
            src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
            alt="Tempo agora"
          />
          <p>{weatherDescription}</p>
        </Weather>
      </UpsideConditions>

      {href == '/' && (
        <ul>
          {briefConditions.map((item, i) => {
            return (
              <ConditionItem key={i}>
                <p>{item.condition}</p>
                <span>{item.value}</span>
              </ConditionItem>
            )
          })}
          <ButtonItem>
            <Link href="/today/brasilia">
              <Button>Mais detalhes</Button>
            </Link>
          </ButtonItem>
        </ul>
      )}

      {href == '/today' && (
        <>
          <ShowDetails onClick={() => setIsOpen(!isOpen)}>
            <p>Detalhes</p>
            <img
              src="/arrow.svg"
              alt="Ver detalhes"
              style={{ transform: isOpen ? 'rotate(180deg)' : 'initial' }}
            />
          </ShowDetails>
          <ul style={{ display: isOpen ? 'block' : 'none' }}>
            {allConditions.map((item, i) => {
              return (
                <ConditionItem key={i}>
                  <p>{item.condition}</p>
                  <span>{item.value}</span>
                </ConditionItem>
              )
            })}
          </ul>
        </>
      )}
    </Container>
  )
}
