import { useUnit } from './useUnit'

export function useConversion(
  value: number,
  type: 'temp' | 'speed' | 'pressure' | 'length'
) {
  const { units } = useUnit()

  const metric = units === 'metric'

  const results = {
    temp: metric
      ? Number(value).toFixed() + '°'
      : (value * 1.8 + 32).toFixed() + '°',
    speed: metric
      ? (value * 3.6).toFixed() + 'km/h'
      : (value * 2.237).toFixed() + 'mph',
    pressure: metric
      ? Number(value).toFixed() + 'mbar'
      : (value / 33.864).toFixed() + 'inHg',
    length: metric
      ? (value / 1000).toFixed() + 'km'
      : (value / 1609).toFixed() + 'mi'
  }

  return results[type]
}
