export function provideMoonPhaseByFraction(p: number) {
  if (p > 0 && p < 0.5) return 'Crescente'
  if (p == 0.5) return 'Cheia'
  if (p > 0.5 && p <= 0.75) return 'Minguante'
  return 'Nova'
}
