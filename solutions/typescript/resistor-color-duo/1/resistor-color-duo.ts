export function decodedValue(colorDuo: string[]) {
  const COLORS: string[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
  let rCodes: string = '';

  for (let i = 0; i < 2; i++) rCodes += String(COLORS.indexOf(colorDuo[i]));

  return Number(rCodes);
}
