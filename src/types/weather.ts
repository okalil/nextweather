export type CurrentWeather = {
  temp: number
  weatherDescription: string
  icon: string
  todayMax: number
  todayMin: number
  todayProb: number
  name: string
}

export type DailyForecast = {
  forecast: {
    dt: string
    tempMax: number
    tempMin: number
    icon: string
    prob: number
  }[]
  name: string
}

export type TodayDetails = {
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
