import { useConversion } from '../../../hooks/useConversion'
import { Card } from '../../elements/Card'

import { HourlyList, HourlyItem, Date, Temp, Prob } from './styles'

type HourlyForecastProps = {
  forecast: { dt: number; icon: string; temp: number; pop: number }[]
  name: string
}

function HourlyForecast({ forecast, name }: HourlyForecastProps) {
  return (
    <Card>
      <h2>Previsão por hora para {name}</h2>

      <HourlyList>
        {forecast.map((hour, i) => {
          return (
            <HourlyItem key={i}>
              <Date>{hour.dt}</Date>
              <img
                src={`https://www.weatherbit.io/static/img/icons/${hour.icon}.png`}
                alt="Previsão da hora"
              />
              <Temp>{useConversion(hour.temp, 'temp')}</Temp>
              <Prob>
                <img src="/water-drop.svg" alt="Gota" />
                <span>{hour.pop}%</span>
              </Prob>
            </HourlyItem>
          )
        })}
      </HourlyList>
    </Card>
  )
}

export { HourlyForecast }
