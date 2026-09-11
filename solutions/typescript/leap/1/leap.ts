export function isLeap(year: number) {
  if (!year || typeof year !== 'number')
    throw new Error('Invalid year!');

  if (year % 100 === 0) return year % 400 === 0
  else return year % 4 === 0;
}
