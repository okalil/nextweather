export function calculateSunProgress(date: number , sunrise: number, sunset: number) {
  const condition = date > sunrise && date < sunset

  const day = (50 * (date - sunrise)) / (sunset - sunrise)
  const night = date > sunset ? 50 : 0

  return condition ? day : night
}
