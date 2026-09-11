type Suffix = 'st' | 'nd' | 'rd' | 'th'

const SUFFIXES: Partial<Record<number, Suffix>> = {1: 'st', 2: 'nd', 3: 'rd'};

export function format(name: string, number: number): string {
  const lastTwo: number = number % 100;
  const isTeen = lastTwo >= 11 && lastTwo <= 13;
  const suffix: Suffix = isTeen ? 'th' : (SUFFIXES[number % 10] ?? 'th');
  
  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`
}
