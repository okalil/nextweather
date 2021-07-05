export function provideMoonPhaseByFraction(p: number) {
  if (p > 0 && p < 0.5) return ['Crescente', '/first-quarter.svg']
  if (p == 0.5) return ['Cheia', '/full-moon.svg']
  if (p > 0.5 && p <= 0.75) return ['Minguante', '/last-quarter.svg']
  return ['Nova', '/new-moon.svg']
}
