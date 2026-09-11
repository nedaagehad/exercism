export const colorCode = (color: string) => {
  const index: number = COLORS.indexOf(color);
  if(index !== -1) return index;
  
  throw new Error('Invalid resistor color!');
}

export const COLORS: string[] = [ 'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
