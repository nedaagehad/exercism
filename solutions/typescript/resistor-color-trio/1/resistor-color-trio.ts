const COLOR_BANDS: Record<string, number> = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
}

export function decodedResistorValue(colorArr: string[]): string {
  const [first, second, multiplier] = colorArr.map(c => COLOR_BANDS[c]);
  let value = (first * 10 + second) * 10 ** multiplier;

  let unit: 'ohms' | 'kiloohms' | 'megaohms' | 'gigaohms' = 'ohms';

  if (value >= 1e9) {
    value /= 1e9;
    unit = 'gigaohms';
  } else if (value >= 1e6) {
    value /= 1e6;
    unit = 'megaohms';
  } else if (value >= 1e3) {
    value /= 1e3;
    unit = 'kiloohms';
  }

  return `${value} ${unit}`;
}