export function count(sentence: string): Map<string, number> {
  const frequency = new Map<string, number>();

  const words = sentence
    .toLowerCase()
    .match(/[a-z0-9]+(?:'[a-z0-9]+)*/g) ?? [];

  for (const word of words) {
    frequency.set(word, (frequency.get(word) ?? 0) + 1);
  }

  return frequency;
}
