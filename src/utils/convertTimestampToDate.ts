import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

export function convertTimestampToDate(timestamp: number, type: string) {
  const date = new Date(timestamp * 1000)
  const result = {
    hours: date.getHours() + date.getMinutes() / 60,
    time: [date.getHours(), date.getMinutes()]
      .map(unit => String(unit).padStart(2, '0'))
      .join(':'),
    date: format(date, 'iiiiii, dd', {
      locale: ptBR
    })
  }
  return result[type]
}
