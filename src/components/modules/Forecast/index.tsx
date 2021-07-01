import React from 'react'
import { useConversion } from '../../../hooks/useConversion'

import { Card } from '../../elements/Card'

import { DayList, DayItem, Date, Max, Min, Prob } from './styles'

type ForecastProps = {
  forecast: {
    dt: string
    tempMax: number
    tempMin: number
    icon: string
    prob: number
  }[]
  name: string
}

export const Forecast = ({ forecast, name }: ForecastProps) => {
  return (
    <Card>
      <h2>Previsão diária para {name}</h2>

      <DayList>
        {forecast.map((day, i) => {
          return (
            <DayItem key={i}>
              <Date style={{ fontWeight: i > 0 ? 500 : 700 }}>{day.dt}</Date>
              <Max>{useConversion(day.tempMax, 'temp')}</Max>
              <Min>{useConversion(day.tempMin, 'temp')}</Min>
              <img
                src={`https://www.weatherbit.io/static/img/icons/${day.icon}.png`}
                alt="Previsão do dia"
              />
              <Prob>
                <img src="/water-drop.svg" alt="Gota" />
                <span style={{ fontWeight: i > 0 ? 400 : 600 }}>
                  {day.prob}%
                </span>
              </Prob>
            </DayItem>
          )
        })}
      </DayList>
    </Card>
  )
}
