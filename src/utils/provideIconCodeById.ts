export function provideIconCodeById(
  id: number,
  time: number | string,
  sunrise: number | string,
  sunset: number | string
) {
  const shift = time > sunrise && time < sunset ? 'd' : 'n'

  const codes = {
    200: 't01',
    201: 't02',
    202: 't03',
    230: 't04',
    231: 't04',
    232: 't04',
    233: 't05',
    300: 'd01',
    301: 'd02',
    302: 'd03',
    500: 'r01',
    501: 'r02',
    502: 'r03',
    511: 'f01',
    520: 'r04',
    521: 'r05',
    522: 'r06',
    600: 's01',
    601: 's02',
    602: 's03',
    610: 's04',
    611: 's05',
    612: 's05',
    621: 's01',
    622: 's02',
    623: 's06',
    701: 'a01',
    711: 'a02',
    721: 'a03',
    731: 'a04',
    741: 'a05',
    751: 'a06',
    800: 'c01',
    801: 'c02',
    802: 'c02',
    803: 'c03',
    804: 'c04',
    900: 'u00'
  }

  return codes[id] + shift
}
