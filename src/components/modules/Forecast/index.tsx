import React from 'react'

import { Card } from '../../elements/Card'

import { DailyForecast } from '../../../types/weather'

import { DayList, DayItem, Date, Max, Min, Prob } from './styles'

export const Forecast = ({ forecast, name }: DailyForecast) => {
  return (
    <Card>
      <h2>Previsão diária para {name}</h2>

      <DayList>
        {forecast.map((day, i) => {
          return (
            <DayItem key={i}>
              <Date style={{ fontWeight: i > 0 ? 500 : 700 }}>{day.dt}</Date>
              <Max>{day.tempMax}°</Max>
              <Min>{day.tempMin}°</Min>
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
