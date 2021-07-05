import { useConversion } from '../../../hooks/useConversion'
import { Container, Weather, Conditions, Condition } from './styles'

type BriefWeatherProps = {
  day: string
  icon: string
  tempMax: number
  tempMin: number
  pop: number
}

function BriefWeather({ day, icon, tempMax, tempMin, pop }: BriefWeatherProps) {
  return (
    <Container>
      <Weather>
        <img
          src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
          alt="Tempo hoje"
        />
        <p>{day}</p>
      </Weather>

      <Conditions>
        <Condition>
          <p>
            <img src="/thermometer.svg" alt="Temperatura" />
            Temperatura
          </p>
          <span>
            {useConversion(tempMax, 'temp')}/{useConversion(tempMin, 'temp')}
          </span>
        </Condition>
        <Condition>
          <p>
            <img src="/water-drop.svg" alt="Chuva" />
            Chuva
          </p>
          <span>{pop}%</span>
        </Condition>
      </Conditions>
    </Container>
  )
}

export { BriefWeather }
